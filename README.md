# fit-tables

Algorithm to generate Time Tables using a Genetic Algorithm.

## MVP

Initially, this project will be built to generate time tables for Adi Shankara Institute of Engineering and Technology, Kalady (the institution at which the collaborators of this project are studying).

## Entities

1. Batch

   A batch means a group of students with a common admission year, graduation year and course.

2. Subject

   A batch can have multiple subjects. A subject can be of the types - theory and lab.

3. Teacher

   A subject can have one or more teachers.

## Constraints

- Hard Constraints

   1. Lab subjects should be 3 hours long. 
   2. A teacher cannot have more than one subject at the same time.
   3. Minimum limit for a subject to occur in a week is 4. Maximum is 5.

- Soft Constraints

   1. All the faculties must atleast take more than 7 periods a week.
   2. A faculty must not have 2 consecutive periods for 2 different batches

## Population

The population will be the required time table. The chromosomes are each hour in the time table. The chromosome will be in the following format.

[Batch, Subject, Teacher]

_Refer this [page](https://www.tutorialspoint.com/genetic_algorithms/genetic_algorithms_fundamentals.htm) to understand the terminology._

## Algorithm

1. Get batch details, subject details and teachers' details.
2. Create population matrix where no. of rows is given by

   no. of batches \* no. of days \* no. hours

3. Populate the matrix with each element containing [Batch, Subject, Teacher] chromosomes.
4. Check for conflicts.
5. If there are no conflicts, exit.
6. Change subject or teacher of the chrmosomes with conflicts.
7. Goto step 4.
