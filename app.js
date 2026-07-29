// console.log(document);

// ------------  EVENTS Capturing, Bubbling, & Delegation ----------------

// document.getElementById("userCard")
//     .addEventListener("click", function () {
//         console.log("Navigate to User Details Page");
//         window.location.href = "./detail.html"
//     });

// document.getElementById("emailBtn")
//     .addEventListener("click", function () {
//         alert("Opening Email Client...");
//     });

// document.getElementById("callBtn")
//     .addEventListener("click", function (event) {
//         event.stopPropagation();
//         console.log("Calling User...");
//     });



let btnOn = document.getElementById("btnOn")
let btnOff = document.getElementById("btnOff")
let bulbImg = document.getElementById("bulb-img")

console.log("bulbImg", bulbImg);

btnOn.addEventListener("click", function () {
    bulbImg.src = "bulb-on.png"
})


btnOff.addEventListener("click", function () {
    bulbImg.src = "bulb-off.png"
})


