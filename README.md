# Unhandled Promise Rejection in Express.js Route
This repository demonstrates a common error in Express.js applications: neglecting to handle promise rejections in asynchronous route handlers.

## Bug Description
The `bug.js` file contains an Express.js route that performs an asynchronous operation (`someAsyncOperation()`). If this operation fails, the promise rejection is not caught, which will lead to the server crashing without providing any error information.

## Solution
The `bugSolution.js` file demonstrates the correct way to handle such promise rejections.  It wraps the asynchronous operation within a `try...catch` block, handling errors gracefully.  A more robust solution would also send a proper error response to the client.

## How to reproduce the bug:
1. Clone this repository.
2. Run `node bug.js`. 
3. Simulate an error in `someAsyncOperation()` (e.g., force a network error or throw an exception).
4. Observe that the server crashes silently.

## How to run the solution:
1. Run `node bugSolution.js`.