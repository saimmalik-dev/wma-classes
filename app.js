// // OOP IN JAVASCRIPT
// // First we will learn about object and then we will learn about classes and objects in javascript

// var car = {
//     model: "Corolla",   // key: value
//     color: "Black",
//     speed: 200,
//     engine: "1500cc",
//     sunRoof: true,
//     brand: "TOYOTA",
//     twoSeater: true,
//     startCar: function (ignition = false) {
//         if (ignition === true) {
//             console.log("Start the car");
//             return ("Car has started");
//         }
//         return "First ON the switch";

//     }
// };

// car.modal = "Civic"


// var newObj = {} // Object Literal

// console.log(typeof car);
// console.log("car object", car);
// console.log("car.color", car.color);
// console.log("car top speed", car.speed);
// console.log("car start", car.startCar(true));

// Using Dot Notation
// console.log(obj.name);
// console.log("car.color", car.color);




// class CarClass {

//     constructor(color, brand) {  // A constructor in JavaScript is a special function used to create and initialize object.
//         this.color = color;
//         // this.brand = brand;
//     }

// }

// var carObj1 = new CarClass()
// console.log(carObj1);
// var carObj2 = new CarClass("Red", "Audi")
// console.log(carObj2);


class Student {
    constructor(name, rollNum, age) {
        this.name = name;
        this.RollNum = rollNum;
        this.age = age;
    }

    getStudentName() {
        return "Name: " + this.name + " RoLLNUM " + this.RollNum;
    }
}


var student1 = new Student("Asad", "105", 25)
var student2 = new Student("Ali", "100", 20)

console.log("student1", student1.name);
console.log("student2 name", student1.getStudentName());
console.log("student2", student2);
console.log("student2 name", student2.getStudentName());




// // Without OOP (Procedural Programming)
// var stdName1 = "Name";
// var stdRoll1 = "Name";
// var stdAge1 = 12;
// function getStudentName1() {
//     return "Name" + stdName1
// }


// var stdName2 = "Name2";
// var stdRoll2 = "Nam2";
// var stdAge2 = 12;
// function getStudentName2() {
//     return "Name" + stdName2
// }






// var personName = "my name";

// const person = {
//     personName: "GeeksforGeeks",
//     greet() {
//         return "Welcome To " + this.personName;
//     }
// };
// console.log(person.greet());





var date = new Date();
console.log("date", date);

var currYear = date.getFullYear();
var currMonth = date.getMonth();
var currMonth = date.toISOString();
console.log("currMonth", currMonth.split("T")[0]);

var currDate = date.getDate();
console.log(currDate);

var Now = currDate + currMonth + currYear;

console.log("Now", Now);

// var today = date.get();
console.log("currYear", currYear);

