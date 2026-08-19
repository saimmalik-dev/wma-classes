// // Scopes, Lexical Scope, Scope Chaining, TDZ and hoisting.

// Global vs Local Scope
// // let usernAME = "ALI" // global scope
// if (4 < 5) {
//    var usernAME = "ALI" // local scope
//     console.log(usernAME);

// }
// console.log(usernAME);


// // Lexical Scope 
// // Lexical scope means a function can access variables from the scope in which it was defined. The scope is determined by the code structure, not by where the function is called.

// function outer() {
//     let userName = "Ahmed";
//     function inner() {
//         // let innervar = "no name"
//         console.log(" innner function:", userName);
//     }


//     inner()
//     console.log("outer function:", userName);
// }

// outer();
// 

//  ------------- Lexical Scope Example -------------------
// let globalVar = "I am a global variable";

// function outerFunction() {
//   let outerVar = "I am an outer variable";

//   function innerFunction() {
//     let innerVar = "I am an inner variable";
//     console.log(globalVar); // Found in the global scope
//     console.log(outerVar); // Found in the outer function scope
//     console.log(innerVar); // Found in the inner function scope
//   }

//   innerFunction();
// }

// outerFunction();






// // Hoisting: the process or mechanism of moving all variable, function, or class declarations to the top of the scope or "js file if global". It moves top conceptually not really.
// console.log(x);

// x = 5; // Assign 5 to x
// var x; // Declare x
// console.log(x);

// // Hoisting function:
// hoisting();

// function hoisting() {
//     console.log("THIS IS FUNCTION");

// }


// console.log(y);

// y = 10; // Assign 10 to y
// var y; // Declare y
// console.log(y);


// Temporal Dead Zone (TDZ)
// TDZ a area where variable declared with let/const in placed temporary before initialization 
// console.log(y);

y = 10; // Assign 10 to y
let y; // Declare y
console.log(y);


// console.log(username);
// var username = "ali"

// console.log(username);



// console.log(letusername);
// let letusername = "ali"

// console.log(letusername);

function demoTDZ() {
  console.log(myLet); // ReferenceError
  let myLet = 100;
  console.log(myLet); // 100
}
demoTDZ();
