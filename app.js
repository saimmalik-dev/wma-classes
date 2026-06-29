// Strings in JS


// var stringVar = "Hello User's"
// stringVar
// console.log(stringVar[10])
// console.log(stringVar[10])
// console.log(stringVar[10])
// console.log(stringVar[10])
// console.log(stringVar[10])

// Template Literals
// console.log("dfsdfsdf ${stringVar}")
// console.log(`fdsdsfsdfsddsfsdsdfsd ${stringVar}`)

// var arr = [1, 2, 35, 5, 789, 45]
// console.log(arr.slice(3, 6))


// most used string method in web dev split, lowercase  uppercase, substring, slicing ,   trim



// STRING METHODS IN JS
// 1. Slicing / Substring
// var arr = [1, 2, 35, 5, 789, 45]
// console.log(arr.slice(3, 6))
// console.log(arr)

// var str = "Apple, Banana, Kiwi";
// console.log(str.substring(0, 5))
// console.log(str)
// console.log(str.length)



// 2. Uppercase and Lowercase
// var text1 = "Hello World!";
// var text2 = text1.toUpperCase();
// var text2 = text1.toLowerCase();
// console.log(text1)
// console.log(text2)


// 3. Trim Method
// var cnic = "41302-947865-1    "
// var timmedCnic = cnic.trim()
// console.log(timmedCnic.length)
// if (timmedCnic.length > 15) {
//     console.error("Invalid CNIC")
// }


// console.log(timmedCnic)
// console.log(cnic.length)




// 4. Padding Method
// var text = "5";
// var padded = text.padStart(5,"0");

// console.log(padded)


// 6. Repeat Method
// var text = "Hello world!";
// var result = text.repeat(5);

// console.log(result)






// 7. Split Method
// var cnic = "41302-947865-1    "
// var timmedCnic = cnic.trim()
// console.log(timmedCnic.length)
// if (timmedCnic.length > 15) {
//     console.error("Invalid CNIC")
// }

// console.log(timmedCnic)
// console.log(cnic.length)

// var splittedString = timmedCnic.split("")
// console.log("splittedString", splittedString)


// 8. Searching Methods
// var hello = "Please locate where 'locate' occurs!";

// console.log(hello.search("where"))

// console.log(hello.indexOf("where"))
// console.log(hello[7])

// 9. Replace/ Replace All

var text = "Please visit Microsoft!, You should visit Microsoft";
var newStr = text.replaceAll("Microsoft", "SMIT Hyderabad");
console.log(newStr)



// var text2 = "Please visit Microsoft and Microsoft!";