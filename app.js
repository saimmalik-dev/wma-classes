// Gloabl Execution Context

// console.log("Hello world");

// var username;
// console.log("username:", username); // ""

// function greet(name) {
//     console.log("hello", name);

// }

// username = "ali"
// greet(username)



// =============   var -> function scoped ============
// var identifier is function scoped;
// function checkAge() {
//     var age = 30
//     if (age < 18) {
//         console.log("You  are teenager");

//     } else {
//         console.log("Your age is" + age);
//     }
// }
// console.log(age);
// checkAge()

// but var is not blocked-scope
// var age = 15
// if (age < 18) {
//     console.log("You  are teenager");
//     var ager = "teenager";
// } else {
//     console.log("Your age is" + age);
// }
// console.log("ager", ager);


// ==================== let/const -> block scoped {} =================
// function checkAge() {
//     let age = 30
//     if (age < 18) {
//         console.log("You  are teenager");

//     } else {
//         console.log("Your age is" + age);
//     }
// }
// console.log(age);
// checkAge()

// but let is  blocked-scope
// let age = 15
// if (age < 18) {
//     console.log("You  are teenager");
//     let ager = "teenager";
// } else {
//     console.log("Your age is" + age);
// }
// console.log("ager", ager);




// console.log(userName); // undefined - Wait, what?
// console.log(userAge);  // ReferenceError - Okay, now I'm confused

// var userName = "Sarah";
// let userAge = 25;










// // Your code
// console.log(greeting);    // What will this print?
// console.log(calculate);   // And this?
// console.log(userName);    // And this?

// var greeting = "Hello";

// function calculate(a, b) {
//   return a + b;
// }

// let userName = "Alex";


// Your code
// console.log(greeting);    // What will this print?
// console.log(calculate);   // And this?
// console.log(userName);    // And this?

// var greeting = "Hello";

// function calculate(a, b) {
//     return a + b;
// }

// let userName = "Alex";





function one() {
    two()

    console.log("Call #1");
}
function two() {
    three()
    console.log("Call #2");
}

function three() {
    console.log("Call #3");
}

one()


//
// call #3
// call #2
// call #1