import json
import os
from random import randrange
from flask import Flask, request, send_from_directory


def generate(data):
    noBatches = 0
    noChromosomes = 0
    noDays = 5
    noHours = 7
    noTotalHours = noDays * noHours

    batches = []
    population = []

    def changeTeachers():
        mutationCount = 0
        for (i, chromosome) in enumerate(population):
            if chromosome[3] > 0:
                batch = next(
                    (batch for batch in batches if batch["name"] == chromosome[0]), None)
                if batch != None:
                    subject = next(
                        (subject for subject in batch["subjects"] if subject["name"] == chromosome[1]), None)
                    if subject != None:
                        if len(subject["teachers"]) > 1:
                            mutationCount += 1
                            j = 0
                            while population[i][2] == subject["teachers"][j]:
                                j = randrange(len(subject["teachers"]))
                            population[i][2] = subject["teachers"][j]
        return mutationCount

    def checkCompletion():
        for chromosome in population:
            if chromosome[3] > 0:
                return False
        return True

    def checkForConflicts():
        for i in range(0, noTotalHours):
            hour = []
            for j in range(i, noChromosomes, noTotalHours):
                hour.append(population[j][2])
            for j in range(0, noBatches):
                population[i + j * noTotalHours][3] = hour.count(hour[j]) - 1

    def exchangeConflicts():
        crossoverCount = 0
        populationConflicts = []
        for (i, chromosome) in enumerate(population):
            if chromosome[3] > 0:
                populationConflicts.append([i, population[i]])
        for i in range(len(populationConflicts) - 1):
            if populationConflicts[i][1][0] == populationConflicts[i + 1][1][0]:
                crossoverCount += 1
                temp = population[populationConflicts[i][0]]
                population[populationConflicts[i][0]
                           ] = population[populationConflicts[i + 1][0]]
                population[populationConflicts[i + 1][0]] = temp
        return crossoverCount

    def exchangeSubjects():
        mutationCount = 0
        for (i, chromosome) in enumerate(population[:-2]):
            if chromosome[3] > 0:
                for j in range(i + noTotalHours, len(population), noTotalHours):
                    if chromosome[2] == population[j][2]:
                        k = j + 1
                        if population[i][2] == population[i+1][2] or population[k][3] > 0:
                            k += 1
                        mutationCount += 1
                        temp = population[j]
                        population[j] = population[k]
                        population[k] = temp
                        break
        if population[-1][3] > 0 or population[-2][3] > 0:
            temp = population[-1]
            population[-1] = population[-2]
            population[-2] = temp
        return mutationCount

    def initiatePopulation():
        i = 0
        for batch in batches:
            available = []
            noAvailable = 0
            for subject in batch["subjects"]:
                for _ in range(subject["min"] // subject["step"]):
                    noAvailable += 1
                    available.append(subject)
            while noAvailable > 0:
                j = randrange(noAvailable)
                k = randrange(len(available[j]["teachers"]))
                temp = []
                if i % noHours > noHours - available[j]["step"]:
                    for _ in range(i % noHours - noHours + available[j]["step"]):
                        temp.append(population.pop())
                for _ in range(available[j]["step"]):
                    population.append([
                        batch["name"],
                        available[j]["name"],
                        available[j]["teachers"][k],
                        0
                    ])
                    i += 1
                for subject in temp:
                    population.append(subject)
                del available[j]
                noAvailable -= 1
            available = []
            noAvailable = 0
            for subject in batch["subjects"]:
                for _ in range((subject["max"] - subject["min"]) // subject["step"]):
                    noAvailable += 1
                    available.append(subject)
            for _ in range(noTotalHours - len(population) % noTotalHours):
                j = randrange(noAvailable)
                k = randrange(len(available[j]["teachers"]))
                temp = []
                if i % noHours > noHours - available[j]["step"]:
                    for _ in range(i % noHours - noHours + available[j]["step"]):
                        temp.append(population.pop())
                for _ in range(available[j]["step"]):
                    population.append([
                        batch["name"],
                        available[j]["name"],
                        available[j]["teachers"][k],
                        0
                    ])
                    i += 1
                for subject in temp:
                    population.append(subject)
                del available[j]
                noAvailable -= 1

    def loadBatches(url):
        with open(url) as f:
            fileData = json.load(f)
        return fileData["batches"]

    def mutatePopulation():
        crossoverCount = 0
        mutationCount = 0
        for _ in range(5):
            mutationCount += changeTeachers()
            checkForConflicts()
            crossoverCount += exchangeConflicts()
            checkForConflicts()
            mutationCount += exchangeSubjects()
            checkForConflicts()
            if checkCompletion():
                print('\n\nCrossover percentage: ' +
                      str(crossoverCount / (crossoverCount + mutationCount) * 100) + '%')
                print('Mutation percentage: ' +
                      str(mutationCount / (crossoverCount + mutationCount) * 100) + '%')
                break

    try:
        if len(data["batches"]) > 0:
            batches = data["batches"]
        else:
            batches = loadBatches('data.json')
        noBatches = len(batches)
        noChromosomes = noBatches * noTotalHours
        for batch in batches:
            totalMax = 0
            for subject in batch["subjects"]:
                totalMax += subject["max"]
            if totalMax < noTotalHours:
                return {'msg': 'low limits', 'batch': batch["name"]}
        for _ in range(100):
            initiatePopulation()
            checkForConflicts()
            mutatePopulation()
            if checkCompletion():
                break
        if checkCompletion():
            timetable = []
            index = 0
            for _ in range(noBatches):
                batch = {'name': population[index][0], 'classes': []}
                for _ in range(noDays):
                    day = []
                    for _ in range(noHours):
                        population[index].pop()
                        del population[index][0]
                        day.append(population[index])
                        index += 1
                    batch['classes'].append(day)
                timetable.append(batch)
            final = {'timetable': timetable}
            with open('timetable.json', 'w') as outfile:
                json.dump(final, outfile)
            return {'timetable': timetable}
        else:
            return {'msg': 'failed'}
    except:
        return {'msg': 'failed'}


app = Flask(__name__, static_folder='client/build')


@app.route('/generate', methods=['POST'])
def respondGenerate():
    data = json.loads(request.data)
    with open('inputData.json', 'w') as outfile:
        json.dump(data, outfile)
    return generate(data)


@app.route('/load', methods=['GET'])
def respondLoad():
    with open('inputData.json') as json_file:
        batches = json.load(json_file)
    with open('timetable.json') as json_file:
        timetable = json.load(json_file)
    return {'b': batches, 't': timetable}


@app.route('/save', methods=['POST'])
def respondSave():
    data = json.loads(request.data)
    with open('inputData.json', 'w') as outfile:
        json.dump(data, outfile)
    return {'msg': 'Saved'}


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run()
