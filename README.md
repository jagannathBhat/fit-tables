# fit-tables

A web app that generates Time Tables using a Genetic Algorithm.

## Entities

1. Batch

   A batch means a group of students with a common admission year, graduation year and course.

2. Subject

   A batch can have multiple subjects. A subject can be of the types - theory and lab.

3. Teacher

   A subject can have one or more teachers.

## Constraints

1. A teacher cannot have more than one subject at the same time.

## Population

The population will be the required time table. The chromosomes are each hour in the time table. The chromosome will be in the following format.

[Batch, Subject, Teacher]

_Refer this [page](https://www.tutorialspoint.com/genetic_algorithms/genetic_algorithms_fundamentals.htm) to understand the terminology._

## Algorithm

1. Get batch details, subject details, and teachers' details.

   - Batch details include the name of the batch.
   - Subject details include the name of the subject, minimum and maximum times it should be taken in a week, and how many hours does it take.
   - Teachers' details include the names of the teachers.

   ```json
   {
   	"batches": [
   		{
   			"name": "batch name",
   			"subjects": [
   				{
   					"name": "subject name",
   					"teachers": ["teacher name", "teacher name"],
   					"min": 0,
   					"max": 0,
   					"step": 0
   				}
   			]
   		}
   	]
   }
   ```

2. Create the population matrix with dimensions \[no of batches \* no of days \* no of hours per day\]\[3\].
3. Repeat the following for a limited number of iterations.
   1. Populate the matrix randomly with each element containing [Batch, Subject, Teacher] chromosomes within the minimum and maximum limits of the subjects.
   2. Check for conflicts.
   3. Repeat the following for a limited number of iterations.
      1. Try changing the teacher of the subjects with conflicts.
      2. Try swapping two subjects with conflicts in the same batch.
      3. Try swapping one subject with conflict with the adjacent subject.
      4. If there are no conflicts, exit both loops.
4. Print the population matrix as a time table.
