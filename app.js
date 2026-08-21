// // Lexical Scope, this keyword, Regular and Arrow Functions, Desturcturing, Rest & Spread operator


// // // Lexical Scope 
// // Lexical scope means a function can access variables from the scope in which it was defined. The scope is determined by the code structure, not by where the function is called.

// // Lexical scope means that variable accessibility is determined entirely by the physical position of the code at compile time, not where the function is executed.

// // lexical scope mein kahan likha hai yeh matter krta hai. na k yeh k kahan pr call/execute hua.

// // function outer() {

// //   let userName = "Ahmed";
// //   function inner() {
// //     // let innervar = "no name"
// //     console.log(" innner function:", userName);
// //   }

// //   inner()
// //   console.log("outer function:", userName);
// // }

// // outer();

// //  ------------- Lexical Scope Example -------------------
// // let globalVar = "I am a global variable";

// // function outerFunction() {
// //   let outerVar = "I am an outer variable";

// //   function innerFunction() {
// //     let innerVar = "I am an inner variable";
// //     console.log(globalVar); // Found in the global scope
// //     console.log(outerVar); // Found in the outer function scope
// //     console.log(innerVar); // Found in the inner function scope
// //   }

// //   innerFunction();
// // }

// // outerFunction();



// // This keyword.
// // Method invokation: this is determined by the owner object of that method.

// const obj = {
//   userName: "ali",
//   // test: "ali",
//   greet: function () {
//     console.log("this", this);
//     console.log('Hello: ' + this.userName);

//     let user = "user";
//     console.log("user", user);

//   },
//   arrowGreet: () => {
//     console.log("Arrow fn",this);

//     console.log(`Hello: ${this}`);

//     // let user = "user";
//     // console.log("user", user);

//   }
// }
// obj.greet()
// obj.arrowGreet()


// // let name = "ali"
// // alert("Hello " + name)




// // var name = "asad"

// // function userDetails() {

// //   console.log(this);
// //   console.log(this.name);
// //   console.log("Here is a user details " + this.name);


// // }

// // userDetails()


// // function fnName(a, b) {
// //   return a + b
// // }
// // fnName(3, 4)

// // const arrowFn = (a, b) => {
// //   return a + b
// // };
// // console.log(arrowFn(3, 4))




// // Function declaration vs Function expression
// // Function Declaration
// function fnName(a, b) {
//   return a + b
// }
// fnName(3, 4)
// // fnName function is not assigned to any variable;

// // Function EXPRESSION
// // if function declaration start with variable idenfier then it would be function expression.
// const fnExpression = function (a, b) {
//   return a + b
// }
// fnExpression(3, 4)



// // Arrow Function: 
// // arrow functions are always in expression
// const arrowFn = () => {

// }



// greet(); // ReferenceError: Cannot access 'greet' before initialization

// const greet = () => {
//     console.log('Hello!');
// };







// const obj = {
//   objName: "ali",
//   greet: function () {
//     // console.log("this", this);
//     console.log('Hello: ' + this.objName);
//   },
//   arrowGreet: () => {
//     // console.log("Arrow fn",this);

//     console.log(`Hello: ${this.objName}`);

//   }
// }
// obj.greet()
// obj.arrowGreet()




// [1, 2, 3, 4, 5, 6] -> [4, 5, 6] -> [5, 6] -> 6

// ['ali', 'asad','amir','hassan']