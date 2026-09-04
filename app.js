// ASYNCHRONOUS JAVASCRIPT

// Asynchronous JavaScript allows for non-blocking operations, enabling tasks to run concurrently without waiting for each other to complete. This is particularly useful for tasks like fetching data from APIs, reading files, or performing time-consuming computations.


// blocking request -> any request that stops the execution of code until it completes, causing delays in the program's flow. 
// In contrast, asynchronous requests allow the program to continue executing other tasks while waiting for the response, improving efficiency and responsiveness.


// // Synchronous JavaScript Code
// console.log(1);
// console.log(2);
// console.log(3);



// // Asynchronous JavaScript Code Snippet
// console.log("Hi!");

// setTimeout(function timeout() {
//     console.log("Click the button!");
// }, 5000);

// console.log("Welcome to SMIT.");






// JavaScript Event Loop Demo
console.log("1: Start");

setTimeout(() => {
    console.log("2: setTimeout callback");
}, 0);

Promise.resolve()
    .then(() => {
        console.log("3: Promise.then (microtask)");
    })
    .then(() => {
        console.log("4: Chained Promise.then");
    });

console.log("5: End");

// Expected output order: 1, 5, 3, 4, 2
// Sync code runs first, then microtasks, then macrotasks



// Microtasks vs Macrotasks in JavaScript
// Microtask Queue will only execute after the call stack is empty,
// Macrotask Queue will only execute after the microtask queue is empty, and the call stack is empty.
// This ensures that microtasks have a higher priority than macrotasks in the event loop.




