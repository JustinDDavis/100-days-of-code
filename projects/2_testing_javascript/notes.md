# Understanding TDD with Modern JavaScript

https://www.youtube.com/watch?v=oneGCBiPK_Q
@royosherove

- Using
  - Wallaby (requires a trial license to setup) 
  - Jest ()
- Katas 
  - Solve the same problem over and over. You'll learn new optimizations to refine how you work. 
- File Names
  - For tests, you can use "spec" files.
- Javascript Ideas
  - Functions will have entry points and exit points. 
  - Entry points are usually limited to just one. 
  - Exit points can be:
    - Return Values
    - Changing State internally of something.
    - Sending to a log file. 
- Testing Concepts
  - Entry Point/Scenario/Expected behavior (Looking for when understanding a test)
- You will always have time to writes tests, if you write them before the code.
- By writing tests one-by-one, you're sure you're writing code that isn't over engineered trying to more than one test at a time.


Their Experiment
|------------------|------------------|
| Classic          | TDD              |
|------------------|------------------|
| Implement - 7    | Implement - 14   |
| Integration - 7  | Integration - 2  |
| Testing - 3      | Testing - 3      |
| Fix Bugs - 3     | Fix Bugs - 2     |
| Testing - 3      | Testing - 1      |
| Fix Bugs - 2     | Fix Bugs - 1     |
| Testing - 1      | Testing - 1      |
| 26 Days          | 24 Days          |
|------------------|------------------|
