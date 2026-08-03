

// // getting the first child, last child, parent node, next sibling
// console.log("list.firstChild", list.firstChild);
// console.log("list.lastChild", list.lastChild);
// console.log("list.parentNode", list.parentNode);
// console.log("list.nextSibling", list.nextSibling);



// // GET, SET, HAS, REMOVE ATTRIBUTES
// const natureImg = document.getElementById("nature-img")
// console.log("natureImg", natureImg);
// console.log("natureImg", natureImg.attributes);
// console.log("natureImg", natureImg.hasAttribute("id"));
// console.log("natureImg", natureImg.getAttribute("src"));

// natureImg.setAttribute("src", "./event-propagation.png");
// console.log("natureImg", natureImg.setAttribute("src", "./event-propagation.png"));




// Creating the elements dynamically and appending them in the DOM

const dynamicDiv = document.getElementById("dynamic-div")

// STEP:1 Creating the elements dynamically
const dynamicHeading = document.createElement("h2")
const dynamicImg = document.createElement("img")
const dynamicButton = document.createElement("button")

dynamicHeading.innerText = "This is dynamic heading";
dynamicImg.setAttribute("src", "./event-propagation.png");
dynamicImg.setAttribute("height", "200px");
dynamicButton.innerText = "Click Me";

// STEP:2 Linking/Appending the created elements in the DOM
// dynamicDiv.appendChild(dynamicHeading)
// dynamicDiv.appendChild(dynamicImg)
// dynamicDiv.appendChild(dynamicButton)

const toggleBtn = document.getElementById("toggleBtn")
let isVisible = false
toggleBtn.addEventListener("click", function () {
    if (isVisible == false) {
        dynamicDiv.appendChild(dynamicHeading)
        dynamicDiv.appendChild(dynamicImg)
        dynamicDiv.appendChild(dynamicButton)
        isVisible = true
    } else {
        dynamicDiv.removeChild(dynamicHeading)
        dynamicDiv.removeChild(dynamicImg)
        dynamicDiv.removeChild(dynamicButton)
        isVisible = false
    }
})