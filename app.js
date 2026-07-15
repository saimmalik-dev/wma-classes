// EVENTS IN JS #3 (Revision)


// console.log(document.getElementsByClassName('heading'));

// Event Listeners
var btn = document.getElementById('btn')
console.log(btn)
// 2 .DOM Property Handlers
// btn.onclick = () => {
//     alert("Button clicked!");
// };


// 3. addEventListener() (Preferred)
// btn.addEventListener('click', function () {
//     alert("Button clicked")
// })


// OnKeyDown event -> trigger when the key is pressed
var counter = 0
btn.addEventListener("keydown", function (event) {
    console.log("Key is down");
    console.log("Key is down", event);
    console.log("Key is down", event.key);
    if(event.key === "Enter"){
        // login()
    }
    ++counter
    btn.innerText = "Key is down" + counter

})

// OnKeyUp event -> trigger when the key is released
btn.addEventListener("keyup", function () {
    alert("Key is released!")
    // console.log("Key is down");
    // ++counter
    // btn.innerText = "Key is down" + counter 

})

// onFocus event -> trigger when the element is focused
btn.addEventListener("focus", function () {
    // console.log("Key is down");
    btn.style.backgroundColor = "red";

})


// onBlur event -> trigger when the element loses focus
btn.addEventListener("blur", function () {
    // console.log("Key is down");
    btn.style.backgroundColor = "blue";
    btn.style.color = "white";

})




// INPUT event -> trigger on every key stroke/press
var inputElem = document.getElementById("input")
console.log(inputElem);

inputElem.addEventListener("input", function (e) {
    // console.log(e);
    // console.log(e.target);
    console.log(e.target.value);


})

// OnChange -> waits until the user finishes interacting. and removed focus
var inputElem = document.getElementById("input")
console.log(inputElem);

inputElem.addEventListener("change", function (e) {
    console.log("change event:",e.target.value);
})


inputElem.addEventListener("focus", function () {
    // console.log("Key is down");
    inputElem.style.backgroundColor = "red";

})


// onBlur event -> trigger when the element loses focus
inputElem.addEventListener("blur", function () {
    // console.log("Key is down");
    inputElem.style.backgroundColor = "blue";
    inputElem.style.color = "white";

})

