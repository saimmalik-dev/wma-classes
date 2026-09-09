// // const displayName = (name) => {
// //     console.log("Hello User", name);
// // }

// // const showDashboard = (name, callback) => {
// //     callback(name)
// //     console.log("Showing Dashboard data for " + name);
// // }

// // const Login = () => {
// //     const user = "ali"
// //     if (true) {
// //         showDashboard(user, displayName)
// //     }
// // }

// // Login()


// function greet(name, callback) {
//     console.log(`Hello ${name} !`); // template literals or backticks notation
//     console.log("Hello", name, "!");
//     callback();  // calling the callback function
// }

// function afterGreet() { // CALLBack
//     console.log('Greeting is complete!');
// }

// greet('Ali', () => {
//     console.log('Hello this is callback function ');

// }); // greet function accepting afterGreet as a callback function


// Ali is calling me, i said i will call him later
// Callbacks ->  a callback is a function passed as an argument to another function, which is intended to be executed (or "called back") later. 

const callUser = (name, asdf) => {
    console.log("Calling to " + name);
    console.log(name + "pick up call. I will call back you later ");

    asdf("Ali")


}

const callingBacktoUser = (name) => {
    console.log("Calling to" + name + " from Asad");

}

const calling = () => {
    console.log("Ali is calling to Asad");
    callUser("Asad", callingBacktoUser)

}

calling()


// Callback Hell -> Aik masla hai
// call back hell creates when multiple async operations, which are depend on one another.


// // Promises -> promises that some value or result will be returned, either true or false.

// const promise = new Promise((resolve, reject) => {
//     console.log("Calling API for Data....");

//     let data = ["sad"];
//     if (data.length > 0) {
//         console.log("API se data agya");

//         setTimeout(() => {
//             resolve("Promise is resolved successfully");
//         }, 3000);
//     } else {
//         console.log("API se data nhi agya :)");
//         reject("Promise is rejected");
//     }
// });

// console.log(promise);



// promise
//     .then((res) => {
//         console.log(promise);
//         console.log(res);
//     })
//     .catch((err) => {
//         console.error(err);

//     })




const promise = new Promise((resolve, reject) => {
    console.log("Calling Chefs ...");

    let foodReady = false;
    if (foodReady == true) {
        // console.log("API se data agya");
        setTimeout(() => {
            resolve("Call waiter, Food is ready");
        }, 3000);
    } else {
        console.log("API se data nhi agya :)");
        reject("Promise is rejected");
    }
});

console.log(promise);



promise
    .then((res) => {
        // console.log(promise);
        console.log(res);
        console.log("Serve the food to customers");

    })
    .catch((err) => {
        console.error(err);

    })




const inp = document.getElementById("input");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const obj = {
        id: 1,
        title: inp.value,
    }
    console.log(obj);

    localStorage.setItem("todos", JSON.stringify(obj))

})