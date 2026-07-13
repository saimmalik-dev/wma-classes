// EVENTS IN JS #2


console.log(document.getElementsByClassName('heading'));

// Event Listeners
var btn = document.getElementById('btn');
console.log(btn)

btn.addEventListener('click', function () {
    alert("Button clicked")
})

btn.addEventListener('dblclick', function () {
    alert("Button clicked")
})

btn.addEventListener('scroll', function () {
    alert("Button clicked")
})



// Selecting elements in JS
// We can select elements in JS using the following methods:
// 1. getElementById()
// 2. getElementsByClassName()
// 3. getElementsByTagName()
// 4. querySelector()
// 5. querySelectorAll()


var btn = document.getElementById('btn');
console.log(btn)



var heading= document.getElementsByClassName('heading');

console.log(heading);
heading[0].innerText = "This is heading 1"


// var myPara1 = document.querySelector(".btn");
// myPara1.innerText = 'Hello text'
// console.log(myPara1);




// var myPara = document.querySelectorAll(".heading");
// console.log(myPara);









