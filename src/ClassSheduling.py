import random as rnd
from prettytable import PrettyTable

POPULATION_SIZE = 9
NUMBER_OF_ELITE_SCHEDULES = 1
TOURNAMENT_SELECTION_SIZE = 3
MUTATION_RATE = 0.1


class Data:
    def __init__(self):
        MEETING_TIMES = [
                    ["MT1", "MWF 09:00 - 10:00"],
                    ["MT2", "MWF 11:30 - 12:30"],
                    ["MT3", "TTS 09:00 - 10:00"],
                    ["MT4", "TTS 11:30 - 12:30"]]
        INSTRUCTORS = [["I1", "Dr James Well"],
                   ["I2", "Dr Mike Brown"],
                   ["I3", "Dr Stev Day"],
                   ["I4", "Mrs Jane Doe"]]
        self._meetingTimes = []
        self._instructors = []
        for i in range(len(MEETING_TIMES)):
            self._meetingTimes.append(MeetingTime(MEETING_TIMES[i][0], MEETING_TIMES[i][1]))
        for i in range(len(INSTRUCTORS)):
            self._instructors.append(Instructor(INSTRUCTORS[i][0], INSTRUCTORS[i][1]))
        course1 = Course(
            "C1", "325K", [self._instructors[0], self._instructors[1]])
        course2 = Course("C2", "326K", [
                         self._instructors[0], self._instructors[1], self._instructors[2]])
        course3 = Course(
            "C3", "327K", [self._instructors[0], self._instructors[1]])
        course4 = Course(
            "C4", "328K", [self._instructors[2], self._instructors[3]])
        course5 = Course("C5", "329K", [self._instructors[3]])
        course6 = Course(
            "C6", "330K", [self._instructors[0], self._instructors[2]])
        course7 = Course(
            "C7", "331K", [self._instructors[1], self._instructors[3]])
        self._courses = [course1, course2, course3,
                         course4, course5, course6, course7]
        dept1 = Department("MATH", [course1, course3])
        dept2 = Department("EE", [course2, course4, course5])
        dept3 = Department("PHY", [course6, course7])
        self._depts = [dept1, dept2, dept3]
        self._numberOfClasses = 0
        for i in range(len(self._depts)):
            self._numberOfClasses += len(self._depts[i].getCourses())

    def getMeetingTimes(self): return self._meetingTimes
    def getInstructors(self): return self._instructors
    def getCourses(self): return self._courses
    def getDepts(self): return self._depts
    def getNumberOfClasses(self): return self._numberOfClasses


class Schedule:
    def __init__(self):
        self._data = data
        self._classes = []
        self._numberOfConflicts = 0
        self._fitness = -1
        self._classNumb = 0
        self._isFitnessChanged = True

    def initialize(self):
        depts = self._data.getDepts()
        for i in range(len(depts)):
            courses = depts[i].getCourses()
            for j in range(len(courses)):
                newClass = Class(self._classNumb, depts[i], courses[j])
                self._classNumb += 1
                meetingTimes = data.getMeetingTimes()
                newClass.setMeetingTime(
                    meetingTimes[rnd.randrange(0, len(meetingTimes))])
                instructors = courses[j].getInstructors()
                newClass.setInstructor(
                    instructors[rnd.randrange(0, len(instructors))])
                self._classes.append(newClass)
        return self

    def getClasses(self):
        self._isFitnessChanged = True
        return self._classes

    def getNumberOfConflicts(self): return self._numberOfConflicts

    def getFitness(self):
        if(self._isFitnessChanged):
            self.calculateFitness()
            self._isFitnessChanged = False
        return self._fitness

    def calculateFitness(self):
        self._numberOfConflicts = 0
        classes = self.getClasses()
        classLength = len(classes)
        for i in range(classLength):
            for j in range(classLength):
                if(j != i):
                    if(classes[i].getMeetingTime() == classes[j].getMeetingTime() and classes[i].getId() != classes[j].getId()):
                        if(classes[i].getInstructor().getId() == classes[j].getInstructor().getId()):
                            self._numberOfConflicts += 1
        self._fitness =  1 / (1.0 * self._numberOfConflicts + 1)

    def __str__(self):
        length = len(self._classes) - 1
        returnValue = ""
        for i in range(length):
            returnValue += str(self._classes[i]) + ", "
        returnValue += str(self._classes[length])
        return returnValue


class Population:
    def __init__(self, size):
        self._size = size
        self._data = data
        self._schedules = []
        for _ in range(size):
            self._schedules.append(Schedule().initialize())

    def getSchedules(self): return self._schedules


class GeneticAlgorithm:
    
    def evolve(self, population): return self.mutatePopulation(self.crossoverPopulation(population))

    def crossoverPopulation(self, population):
        crossoverPop = Population(0)
        for i in range(NUMBER_OF_ELITE_SCHEDULES):
            crossoverPop.getSchedules().append(population.getSchedules()[i])
        i = NUMBER_OF_ELITE_SCHEDULES
        while i < POPULATION_SIZE:
            schedule1 = self.selectTournamentPopulation(population).getSchedules()[0]
            schedule2 = self.selectTournamentPopulation(population).getSchedules()[0]
            crossoverPop.getSchedules().append(self.crossoverSchedule(schedule1, schedule2))
            i += 1
        return crossoverPop
    
    def mutatePopulation(self, population):
        for i in range(NUMBER_OF_ELITE_SCHEDULES, POPULATION_SIZE):
            self.mutateSchedule(population.getSchedules()[i])
        return population
    
    def crossoverSchedule(self, schedule1, schedule2):
        crossoverSchedule1 = Schedule().initialize()
        for i in range(len(crossoverSchedule1.getClasses())):
            if(rnd.random() > 0.5): crossoverSchedule1.getClasses()[i] = schedule1.getClasses()[i]
            else: crossoverSchedule1.getClasses()[i] = schedule2.getClasses()[i]
        return crossoverSchedule1

    def mutateSchedule(self, mutateSchedule):
        schedule = Schedule().initialize()
        for i in range(len(mutateSchedule.getClasses())):
            if(MUTATION_RATE > rnd.random()):
                mutateSchedule.getClasses()[i] = schedule.getClasses()[i]
        return mutateSchedule

    def selectTournamentPopulation(self, population):
        tournamentPopulation = Population(0)
        i = 0
        while i < TOURNAMENT_SELECTION_SIZE:
            tournamentPopulation.getSchedules().append(population.getSchedules()[rnd.randrange(0, POPULATION_SIZE)])
            i += 1
        tournamentPopulation.getSchedules().sort(key=lambda x: x.getFitness(), reverse=True)
        return tournamentPopulation


class Course:
    def __init__(self, number, name, instructors):
        self._number = number
        self._name = name
        self._instructors = instructors

    def getNumber(self): return self._number
    def getName(self): return self._name
    def getInstructors(self): return self._instructors
    def __str__(self): return self._name


class Instructor:
    ''' '''

    def __init__(self, id, name):
        self._id = id
        self._name = name

    def getId(self): return self._id
    def getName(self): return self._name
    def __str__(self): return self._name


class MeetingTime:
    ''' '''

    def __init__(self, id, time):
        self._id = id
        self._time = time

    def getId(self): return self._id
    def getTime(self): return self._time

    def __str__(self): return self._time


class Department:
    def __init__(self, name, courses):
        self._name = name
        self._courses = courses

    def getName(self): return self._name
    def getCourses(self): return self._courses
    def __str__(self): return self._name


class Class:
    def __init__(self, id, dept, course):
        self._id = id
        self._dept = dept
        self._course = course
        self._instructor = None
        self._meetingTime = None

    def getId(self): return self._id
    def getDept(self): return self._dept
    def getCourse(self): return self._course
    def getInstructor(self): return self._instructor
    def getMeetingTime(self): return self._meetingTime
    def setInstructor(self, instructor): self._instructor = instructor
    def setMeetingTime(self, meetingTime): self._meetingTime = meetingTime

    def __str__(self):
        return str(self._dept.getName()) + ', ' + str(self._course.getNumber()) + ', ' + str(self._instructor.getId()) + ', ' + str(self._meetingTime.getId())


class DisplayMgr:
    def printAvailableData(self):
        print(">All available data: ")
        self.printDept()
        self.printCourse()
        self.printInstructor()
        self.printMeetingTimes()

    def printDept(self):
        print('Departments', end= ': ')
        for dept in data.getDepts():
            print(dept, end=', ')

    def printCourse(self):
        print("\nCourses", end=": ")
        for course in data.getCourses():
            print(course, end=", ")

    def printInstructor(self):
        print("\nInstructors", end=": ")
        for instructor in data.getInstructors():
            print(instructor, end=", ")

    def printMeetingTimes(self):
        print("\nMeeting Times", end=": ")
        for mt in data.getMeetingTimes():
            print(mt, end=", ")

    def printGeneration(self, population):
        x = PrettyTable(['Conflict Count', 'Fitness'])
        for schedule in population.getSchedules():
            x.add_row([
                schedule.getNumberOfConflicts(),
                schedule.getFitness()
                ])
        print(x)


    def printScheduleAsTable(self, schedule):
        print("\nGenerated Schedule: ")
        x = PrettyTable(['Dept', 'Course', 'Instructor', 'Time'])
        for class1 in schedule.getClasses():
            x.add_row([
                class1.getDept(),
                class1.getCourse(),
                class1.getInstructor(),
                class1.getMeetingTime()
            ])
        print(x)



data = Data()

displayMgr = DisplayMgr()
displayMgr.printAvailableData()
generationNumber = 0
print("\n>Generation # " + str(generationNumber))
population = Population(POPULATION_SIZE)
population.getSchedules().sort(key=lambda x: x.getFitness(), reverse=True)
displayMgr.printGeneration(population)
displayMgr.printScheduleAsTable(population.getSchedules()[0])

geneticAlgorithm = GeneticAlgorithm()

while(population.getSchedules()[0].getFitness() != 1.0 and generationNumber <= 100):
    generationNumber += 1
    print("\n> Generation # " + str(generationNumber))
    population = geneticAlgorithm.evolve(population)
    population.getSchedules().sort(key=lambda x: x.getFitness(), reverse=True)
    displayMgr.printGeneration(population)
    displayMgr.printScheduleAsTable(population.getSchedules()[0])

print("\n\n")