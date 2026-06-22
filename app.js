// ARRAYS IN JS
// Arrays are the combination of variables;


var city0 = "Atlanta"; // 200-208
var city1 = "Baltimore";  // 3000
var city2 = "Chicago";
var city3 = "Denver";
var city4 = "Los Angeles";
var city5 = "Seattle";

var cities = [
    "Atlanta",  // 0
    "Chichago", //  1
    "LA", // 2 
    "Seattle", // 3
    "Denver" // 4
] // 200-205

// Array length
// array length = number of elements in array
console.log("initial values", cities)

console.log(cities[0])
console.log(cities[4])



cities[2] = "Los Angeles"

cities.push("NYC")
cities.push("DC");
console.log("secondary", cities);

cities[4] = "Ottawa"

// cities.pop();

// cities.splice(1, 4)

console.log(cities)



// var slicedArray = cities.slice(0, 3)
// console.log("slicedArray", slicedArray)
console.log("cities", cities)

cities.shift();
cities.unshift("New city");

console.log("cities", cities)



// Array Methods
// 1. push  -> add from rear/end of the array
// 2. pop  -> remove from rear/end of array
// 4. unshift ->  add from start/front of array
// 3. shift  -> remove from start/front of array
// 5. splice -> remove array from any position in array
// 6. slice -> gives the new array slice

// ----------------- Searching Array methods ------------------------
// indexOf
// includes
// concat = > 
// 

var numbers1 = [1, 2, 54, 65]
var numbers2 = [34, 76]
console.log(numbers1)
console.log(numbers2)

var numbers = numbers1.indexOf(1) // spread operator
console.log(numbers)


