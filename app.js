// // console.log(document);

// // ------------  EVENTS Capturing, Bubbling, & Delegation ----------------

// document.getElementById("userCard")
//     .addEventListener("click", function () { // user card event (parent)

//         alert("Navigate to User Details Page");
//         // window.location.href = "./detail.html"
//     });

// document.getElementById("emailBtn")
//     .addEventListener("click", function (event) { // send email btn (child-1)
//         event.stopPropagation();
//         alert("Opening Email Client...");
//     });

// document.getElementById("callBtn")
//     .addEventListener("click", function (event) { // make a call (child-2)
//         event.stopPropagation();
//         console.log("Calling User...");
//     });



// let btnOn = document.getElementById("btnOn")
// let btnOff = document.getElementById("btnOff")
// let bulbImg = document.getElementById("bulb-img")

// console.log("bulbImg", bulbImg);

// btnOn.addEventListener("click", function () {
//     bulbImg.src = "bulb-on.png"
// })


// btnOff.addEventListener("click", function () {
//     bulbImg.src = "bulb-off.png"
// })



// // Event Delegation is optmized way to assign events
// let list = document.getElementById("list")

// console.log(list);

// list.addEventListener("click", function (event) {
//     console.log("event.target:", event.target);
//     console.log("event.target:", event.target.innerText);
//     // console.log(event.target);
//     alert(event.target.innerText)

// })


// let operator = '**'
// switch (operator) {
//     case '+':
//         a + b
//         break;

//     case '/':
//         a / b

//         break;

//     case '*':
//         a * b

//         break;

//     case '-':
//         a - b

//         break;


//     default:
//         break;
// }




let list = document.getElementById("list")
console.log(list);
let activeItem = true
list.addEventListener("click", function (event) {
    console.log("event.target:", event.target);
    // console.log("event:", event);
    // console.log(event.target);
    console.log("list.children", list.children);


    if (activeItem == true) {
        let liItems = list.children;
        for (let i = 0; i < liItems.length; i++) {
            liItems[i].className = ""
        }
        activeItem = false
    }
    console.log(list.children);



    let liTag = event.target;
    liTag.className = "active"
    activeItem = true;


})


