// ARRAYS IN JS
// Arrays are the combination of variables;


var numbers = [1, 2, 54, 65, 45, 50, 56, 78, 89]
numbers.push(100)

// for (var i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]) // since i = 0, it will return numbers[0]
// }



// for (let index = 0; index < numbers.length; index++) {
//     console.log(numbers[index])
//     if (numbers[index] > 50) {
//         console.log("Array element value is greater than 50")
//         break;
//     }
// }

// numbers.forEach(element => {
//     console.log("using for each", element)
// });



// for (var i = 1; i <= 5; i++) {
//     console.log(i);

//     for (var j = 1; j <= 10; j++) {
//         console.log("Table of", i, "-> ", i, " x ", j, " = ", i * j)
//     }

// }


// var character = "H"

var helloStr = "Hello User"
var helloArr = ['H', 'e', 'l', 'l', 'o', ' ', 'U', 's', 'e', 'r']

console.log(helloStr.charAt(9))
var newStr = helloStr.concat("Me")
helloStr.slice()

console.log("helloStr", helloStr)
console.log("newStr", newStr)

console.log(helloArr.length)

