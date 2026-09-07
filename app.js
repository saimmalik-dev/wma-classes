// // ASYNCHRONOUS JAVASCRIPT

// // Asynchronous JavaScript allows for non-blocking operations, enabling tasks to run concurrently without waiting for each other to complete. This is particularly useful for tasks like fetching data from APIs, reading files, or performing time-consuming computations.


// // blocking request -> any request that stops the execution of code until it completes, causing delays in the program's flow. 
// // In contrast, asynchronous requests allow the program to continue executing other tasks while waiting for the response, improving efficiency and responsiveness.


// // // Synchronous JavaScript Code
// // console.log(1);
// // console.log(2);
// // console.log(3);



// // // Asynchronous JavaScript Code Snippet
// // console.log("Hi!");

// // setTimeout(function timeout() {
// //     console.log("Click the button!");
// // }, 5000);

// // console.log("Welcome to SMIT.");






// // JavaScript Event Loop Demo
// console.log("1: Start");

// setTimeout(() => {
//     console.log("2: setTimeout callback");
// }, 0);


// console.log("Promise", Promise.prototype);

// // Promise
// // Promise -> A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// // Promise States
// // 1. Pending: The initial state of a Promise, neither fulfilled nor rejected.
// // 2. Fulfilled: The state of a Promise representing a successful operation.
// // 3. Rejected: The state of a Promise representing a failed operation.

// // Settled Promises -> A settled Promise is one that has been either fulfilled or rejected, meaning it has completed its asynchronous operation and has a definitive outcome.




// const promise = new Promise((resolve, reject) => {
//     console.log("Promose Execution start");

//     setTimeout(() => {
//         resolve("Promise Resolved")
//     }, 3000);

//     // reject("Promise Rejected")

// })

// console.log(promise);


// const callback = () => {
//     console.log(promise);
// }
// setInterval(callback, 1000);






// Promise.resolve(promise)
//     .then(() => {
//         console.log("3: Promise.then (microtask)");
//     })
//     .then(() => {
//         console.log("4: Chained Promise.then");
//     });

// console.log("5: End");



// // Expected output order: 1, 5, 3, 4, 2
// // Sync code runs first, then microtasks, then macrotasks



// // Microtasks vs Macrotasks in JavaScript
// // Microtask Queue will only execute after the call stack is empty,
// // Macrotask Queue will only execute after the microtask queue is empty, and the call stack is empty.
// // This ensures that microtasks have a higher priority than macrotasks in the event loop.







// JSON -> JavaScript Object Notation






// const getData = () => {

//     try {
//         const data = fetch('https://fakestoreapi.com/products/1')
//             .then((res) => { return res.json() })
//             .then((res) => {

//                 console.log(res)
//                 console.log(res.image)
//                 console.log(JSON.stringify(res))

//                 return res;
//             }
//             )
//         console.log("data", data);
//         console.log("json data", JSON.stringify(data));
//         return data
//     }
//     catch (err) {
//         console.log(err);
//         throw new Error("Promise failed");

//     }
// }



const getData = () => {
    return new Promise((resolve, reject) => {

        const data = fetch('https://fakestoreapi.com/products/1')
            .then((res) => { return res.json() })
            .then((res) => {

                console.log(res)
                console.log(res.image)
                console.log(JSON.stringify(res))

                return res;
            })
        if (!data) {
            reject("Promise failed");
        }
        resolve(data);


    });

}

getData().then((res) => {
    console.log(res);
    return res;
}).catch((err) => {
    console.log(err);

})

console.log("Console after then");



localStorage.setItem("name", "value")
localStorage.getItem("name")
localStorage.removeItem("name")



// CRUD -> Create, Read, Update, Delete

const todoList = [
    {
        id: 1,
        todo: "Learn JavaScript",
    },
    {
        id: 2,
        todo: "Learn React",
    },
    {
        id: 3,
        todo: "Learn Node.js",
    },
    {
        id: 4,
        todo: "Learn Express.js",
    },
    
    {
        id:5,
        todo: "Learn Next JS",
    },
]