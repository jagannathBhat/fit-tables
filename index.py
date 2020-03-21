import json
from random import randrange

noBatches = 0
noChromosomes = 0
noDays = 5
noHours = 7
noTotalHours = noDays * noHours

batches = []
population = []


def changeTeachers():
    for (i, chromosome) in enumerate(population):
        if chromosome[3] > 0:
            batch = next(
                (batch for batch in batches if batch["name"] == chromosome[0]), None)
            if batch != None:
                subject = next(
                    (subject for subject in batch["subjects"] if subject["name"] == chromosome[1]), None)
                if subject != None:
                    if len(subject["teachers"]) > 1:
                        j = 0
                        while population[i][2] == subject["teachers"][j]:
                            j = randrange(len(subject["teachers"]))
                        population[i][2] = subject["teachers"][j]


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
    populationConflicts = []
    for (i, chromosome) in enumerate(population):
        if chromosome[3] > 0:
            populationConflicts.append([i, population[i]])
    for i in range(len(populationConflicts) - 1):
        if populationConflicts[i][1][0] == populationConflicts[i + 1][1][0]:
            temp = population[populationConflicts[i][0]]
            population[populationConflicts[i][0]
                       ] = population[populationConflicts[i + 1][0]]
            population[populationConflicts[i + 1][0]] = temp


def exchangeSubjects():
    for (i, chromosome) in enumerate(population[:-2]):
        if chromosome[3] > 0:
            for j in range(i + noTotalHours, len(population), noTotalHours):
                if chromosome[2] == population[j][2]:
                    k = j + 1
                    if population[i][2] == population[i+1][2] or population[k][3] > 0:
                        k += 1
                    temp = population[j]
                    population[j] = population[k]
                    population[k] = temp
                    break
    if population[-1][3] > 0 or population[-2][3] > 0:
        temp = population[-1]
        population[-1] = population[-2]
        population[-2] = temp


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
    with open('data.json') as f:
        data = json.load(f)
    return data["batches"]


def mutatePopulation():
    for i in range(5):
        changeTeachers()
        checkForConflicts()
        exchangeConflicts()
        checkForConflicts()
        exchangeSubjects()
        checkForConflicts()
        if checkCompletion():
            break


if __name__ == '__main__':
    batches = loadBatches('data.json')
    noBatches = len(batches)
    noChromosomes = noBatches * noTotalHours
    for i in range(5):
        initiatePopulation()
        checkForConflicts()
        mutatePopulation()
        if checkCompletion():
            break
    for i in range(len(population)):
        population[i].pop()
    with open('timetable.json', 'w') as json_file:
        json.dump({'timetable': population}, json_file)
