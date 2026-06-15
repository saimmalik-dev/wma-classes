// --------    Loops  ----------
// Loops are used to repeat a block of code multiple times until a certain condition is met. There are different types of loops in JavaScript, including:

// 1. For Loop  (Counter Loop) In this loop, you specify the initialization, test condition, and increment/decrement in a single line. It is commonly used when the number of iterations is known.
// It is also known as pre-test loop because the condition is evaluated before the execution of the loop body. If the condition is false at the beginning, the loop body will not execute at all.


// 2. While Loop
// 3. Do-While Loop



// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)



// 1. For Loop
// for (initialization, test-condition, incremenet/decrement) {
//     code to be executed
// }


// for (var i = 10; i >= 1; i--) {
//     console.log(i)
// }




// -----------------------------------------------------------------
// 2. While Loop
// while (test-condition) {
//      code to be executed
// }

// while (true) {
//     console.log("While loop is running")
// }

// var i = 1
// while (i <= 10) {
//     console.log(i)
//     i++
// }

// Real World Use case
// var password = ""
// while (password != "secure123") {
//     password = prompt("Enter your password");
//     if (password != "secure123") {
//         alert("Invalid password")
//     }
// }

// console.log("Access granted");




// -----------------------------------------------------------------
// Do-While Loop
// do {

//     //  loop body will be here

// } while (test - condition);


// var i = 1;
// do {
//     console.log(i);
//     i++
// } while (i <= 10);


var isFull = "";

do {
    console.log("You ate a cookie! 🍪");

    isFull = prompt("Are you full? (Type 'yes' to stop)");

} while (isFull != "yes")

console.log("No more cookies for you!");















