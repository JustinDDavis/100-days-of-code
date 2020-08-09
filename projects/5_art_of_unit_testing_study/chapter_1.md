# Basics of Unit Testing
Covers:
- Defining Entry Points & Exit Points
- Defining Unit of Work and a unit Test
- ... 


# Definition of unit testing

In OOP, a "unit" is often an entire interface, such as a class. But it could also be an individual method.

You'll write tests for the "SUT". (Subject, System, or Suite Under Test).
Some like "CUT" (Component, Module, or class under test).

Unit stands for "unit of work" or "use case" inside the system. 
A unit as a beginning and an end (Entry Point / Exit Point).

That Unit of Work could use other functions, other modules, and other components. This means the unit of work expands more than just one function. 

## Definition: Unit of Work
Unit of work is the sum of actions between the invocation of an entry point until a noticeable end result through one or more exit points.

The entry point is the thing we trigger. 
Given a publicly visible function....

The function's body is all or part of the unit of work. 
The function's declaration and signature are the entry point into the body.
The resulting outputs or behaviors of the function are its exit points. 


## Entry Points & Exit Points

The entry point needs to be something we can trigger from the "outside" (tests or other prod code).
After it is triggered, it needs to end up doing something useful. If its not useful, it should be removed from the codebase.

What's something useful? 
Something publicly noticeable needs to happen. A return value / State Change / Calling an external party. These are all "exit points". 

The first example: 
```
const sum = (numbers) => {
  const [a, b] = numbers.split(',');
  const result = Number.parseInt(a, 10) +
        Number.parseInt(b, 10);
  return result;
};
 
module.exports.sum = sum;
```

This unit of work is all encompassed in a single function. The function is both the entry point, and because its end result returns value, it also acts as the exit point.

Entry point is the function signature : sum(numbers).

Example 2: 
```
let total = 0;
 
const totalSoFar = () => {
  return total;
};
 
const sum = (numbers) => {
  const [a, b] = numbers.split(',');
  const result = Number.parseInt(a, 10) +
            Number.parseInt(b, 10);
  total += result;
  return result;
};
 
module.exports = {
  sum,
  totalSoFar
};
```

There are two exit points. It does two things. 
- It returns a value (line 68).
- It has new functionality. It sets the state of the module in a way that is noticeable from the caller of the entry point.
  - This part is a little confusing for me. Directly, it isn't noticeable from the "Sum" function that it sets the state. But I think if you look at it from the point of view of the state update as being an output... then this makes sense.

With the two exit points, this means we will likely write two different unit tests.
But should "totalSoFar" be its own entry point? Yes. but in a separate test.

Side note (Teaser): Command / Query Separation.
- Query actions don't change stuff, they just return values
- Command actions change stuff but do not return values.

Example 3: 

```
const winston = require('winston');
let total = 0;
 
const totalSoFar = () => {
  return total;
};
 
const makeLogger = () => {
  return winston
    .createLogger({
      level: 'info',
      transports: new winston.transports.Console()
    });
};
 
const logger = makeLogger();
 
const sum = (numbers) => {
  const [a, b] = numbers.split(',');
  logger.info(
    'this is a very important log output',
    { firstNumWas: a, secondNumWas: b });
 
  const result = Number.parseInt(a, 10) + Number.parseInt(b, 10);
  total += result;
  return result;
};
 
module.exports = {
  totalSoFar,
  sum
};
```

Using this logging, we know have a new exit point/requirement/end result in the function.It logs something to an external entity.This is also called "calling a third party" or "calling a dependency". 

A dependency can be determined by this rule: 
-  “If I can fully and easily control what its doing, and it runs in memory, and its fast, it’s not a dependency”.

As said earlier, its a good idea to have separate tests per exit points.

# Exit Point Types

Our three types of exits:
1. A function that returns a useful value (not undefined). More languages might say its public and non-void. 
2. A noticeable change to state or behavior of the system before and after invocation. (wasCalledFunction())
3. There's a callout to a third-party system that the tests have no control.That 3rd party system doesn't return any value or that value was ignored.


# Different Exit Points, Different Techniques.

Why the emphasis on exit points? Because its a great idea to separate tests per exit point. Each type of exist point might require a different technique to test successfully.

- A return value is the easiest to test.
- State based tests, require a little more gymnastics. You call something, then you do another call to check to see if everything went according to plan.
- Third party, most hoops to jump through. We haven't discussed the idea yet, that's where we're forced to use things like "Mock Objects" in our tests so we can replace the external system with one that we control. 



# Characteristics of a good unit test. 

Great automated tests have had the following properties (not only unit tests):
- Easy to ready and understand the intent of the test author
- Easy to read and write
- Automated and repeatable
- Useful and provide actionable results
- Anyone should be able to run it at a push of a button.
- When it fails, it should be easy to detect what was expected and determine how to pinpoint the problem.

Great Unit tests:
- Run quickly
- Consistent in its results
- Full control of the code under test
- should be fully isolated
- Run in memory without requiring system files/networks/databases.

# A simple checklist 
- Can I run and get results from a test I wrote two weeks or months? 
- Can any member of the teaqm run the tests? 
- Can I run all tests I've written in no more than a few minutes?
- Can I run all tests with a button push?
- Do tests report the same outcome
- Tests pass when there are bugs in other team's code? 
- Do my test show the same result when run on different machines? 
- Do tests stop working if there's no DB? 
- If I delete one test, do other tests remain unaffected?
- Can I easily setup the needed state for a test without relying on other outside resources? 

... Ready for Section 1.8



