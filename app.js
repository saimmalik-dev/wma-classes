//  Desturcturing, Rest and Spread operator, Closures;
//  Desturcturing:
// const user = {
//     name: "huzaifa",
//     className: "12th",
//     age: 18,
//     userProfileImg: "User img",

// }
// const name = user.username
// const class_name = user.className
// console.log(class_name);

// const age = user.age
// const userProfileImg = user.userProfileImg
// userProfileImg
// user_profile_img

// const { userProfileImg, className, age, name } = user;
// console.log(userProfileImg, className, age, name);


// // ARRAY Destructuing
// const arr = [1, 2, 3];
// // arr[0], arr[1]
// const [i, j, k] = arr
// console.log(i, j, k);
// NOTE: in arraay destructuring value is returned according to the array indices (indexes)




// Rest and Spread Operator (...)
// Rest (collect)

const arr = [1, 2, 3]
const [i, ...remaining] = arr;
console.log(remaining);



const user = {
    name: "huzaifa",
    className: "12th",
    age: 18,
    userProfileImg: "User img",
    role: "user"
}

const { role, ...remainingObj } = user;
console.log("role", role);

if (role == "user") {
    console.log("goto user dashboard");
}
const loggedInUser = remainingObj;

console.log("loggedinuser", loggedInUser);




// Speard(expands)
// const arr = [3, 4]
// const arr2 = [1, 2, ...arr]
// console.log("arr2 ", arr2);


// const user = {
//     name: "huzaifa",
//     className: "12th",
//     age: 18,
//     userProfileImg: "User img",
// }

// const objWithRole = {
//     role: "user",
//     ...user
// }
// console.log(objWithRole);
// For simpler understanding you can say, 
// rest is used on left side of variable 
// spread is used on right side of variable 





// Closures
// Why do we need closures?
// Case 1: Create global coutner variable
// let counter = 0; 
// const add = () => {
//     counter++;
//     return counter;
// }

// console.log(counter); // 0
// console.log(add()); // 1
// console.log(add()); // 2
// console.log(add()); // 1
// // counter = 5
// console.log(add()); // 3
// console.log(add()); // 4
// Issue we will be get: any other assignment or fn can update the counter. because counter is global variable

// // Case 2: Create local counter variable
// const add = () => {
//     let counter = 0;
//     counter++;
//     return counter;
// }


// console.log(add()); // 1
// console.log(add()); // 1
// console.log(add()); // 1

// Issue we will get: value will be same


// Simple definition for understanding only -> a function that is returing another inner function;
// Technical Definition -> a function that knows and access its outer function variables and data even after the outer function terminates (or stops execution) is known as closures.

const counterFn = () => {
    let counter = 0;
    const incrementCounter = () => {
        counter++;
        return counter;
    }
    return incrementCounter
}
console.log("counterFn();", counterFn());

const counter = counterFn();
console.log("counter", counter());
console.log("counter", counter());
console.log("counter", counter());
console.log("counter", counter());


const counter2 = counterFn();
console.log("counter2", counter2());
console.log("counter2", counter2());

let increment = document.getElementById("increment")
let val = document.getElementById("val");
increment.addEventListener("click", () => {
    val.innerText = counter2();
})
