// // // // Prototypes in JS and Call,apply,bind methods

// // // const string = "Hello, World!";
// // // console.log(string.__proto__); // Accessing the prototype of the string object
// // // console.log(string.length); // Accessing the length property of the string object


// // const obj = {
// //     name: 'John Doe',
// //     age: 30,
// //     greet: function () {
// //         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// //     }
// // }
// // console.log(typeof obj)
// // console.log(obj)
// // console.log(obj.name)


// // // const newString = "Hello, JavaScript!";
// // const newString = new String("Hello, JavaScript!");
// // const number = 10.433
// // console.log(number.__proto__);
// // console.log(number);

// // const number2 = new Number(10)
// // console.log(newString)
// // console.log(newString.__proto__)
// // console.log(newString.length)
// // console.log(newString.toLowerCase())


// // const p1 = {
// //     name: "basic",
// //     price: 200,
// //     calAnnual: function () {
// //         console.log("Annual", this.price * 12);

// //     }
// // }
// // p1.calAnnual()


// // const p2 = {
// //     name: "platinum",
// //     price: 500,
// //     calAnnual: function () {
// //         console.log("Annual", this.price * 12);

// //     }
// // }
// // p2.__proto__ = p1 // p1 is the prototype of p2
// // console.log(p2);
// // // console.log(p2.__proto__);

// // p2.calAnnual()

// // const p3 = {
// //     name: "basic",
// //     price: 900,
// //     calAnnual: function () {
// //         console.log("Annual", this.price * 12);

// //     }
// // }
// // console.log(p3.calAnnual());

// // obj.__proto__


// // const str = new String("Hello, World!"); // explicitly creating a string object using the String constructor
// const str1 = "Hello, World!"; // implicitly creating a string primitive
// str1.toLowerCase()

// // string ki class se -> string ka object initialize hua, 
// // then wo obj -> prototype bn kr str1 ko assign hogya 
// // str1 = "Hello, World!" -> 
// // str1.__proto__ = objStr
// // objStr.__proto__ = Object.prototype
// // Object.prototype = null

// console.log(str1.__proto__);

// str1.length




// // Class-based approach
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     speak() {
//         console.log(`${this.name} makes a noise.`);
//     };
// }

// // Prototype-based approach
// function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.speak = function () {
//     console.log(this.name + ' makes a noise.');
//     console.log(`${this.name} makes a noise.`); // template literal syntax
// };

