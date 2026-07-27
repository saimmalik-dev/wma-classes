let nameInp = document.getElementById("name")
let radios = document.getElementsByName("gender")
let selectBox = document.getElementById("country")
let emailInp = document.getElementById("email")
// console.log("radios", radios);
let eduChecks = document.getElementsByName("education")
// let arr = [3, 5, 7, 5, 7]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);

// }

function checkRadio() {

    let selected = false;
    let selectedVal = null;
    for (let i = 0; i < radios.length; i++) {
        // console.log("radio", radios[i]);

        if (radios[i].checked == true) { // jab user ne koi radio select krlia
            // console.log("User selected a radio");
            selected = true;
            selectedVal = radios[i].value;
            return selectedVal;
        }
    }

    if (selected == false) {
        alert("Kuch select kr bhai")
    }
}



function checkBoxesValidation() {

    let selected = false;
    let selectedValues = [];
    for (let i = 0; i < eduChecks.length; i++) {
        // console.log("eduChecks", eduChecks[i]);
        // console.log("eduChecks[i].checked", eduChecks[i].checked);

        if (eduChecks[i].checked == true) { // jab user ne koi radio select krlia
            // console.log("User selected a radio");
            selected = true;
            selectedValues.push(eduChecks[i].value);

        }
    }

    if (selected == false) {
        alert("Koi checkbox select kro bhai ")
    }

    return selectedValues;
}

selectBox.addEventListener('change', function (event) {
    event.preventDefault();
    console.log(event.target.value);

})

var myForm = document.getElementById("form");
myForm.addEventListener('submit', function (event) {
    event.preventDefault();

    console.log("------- onsubmit event is triggered --------")


    if (nameInp.value == "") {
        alert("Enter your name")
        return
    }
    // console.log("nameInp.value ", nameInp.value);

    if (emailInp.value == "") {
        alert("Enter your email")
        return;
    }

    // email validation
    let email = emailInp.value;
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(email) == false) {
        alert("Invalid email")
        return
    }

    if (selectBox.value == "") {
        alert("please select your country")
        return
    }


    // if (nameInp.value == "") {
    //     alert("Enter your name")
    // }

    // console.log("total radio", radios);

    let gender = checkRadio();
    console.log("gender", gender);



    let selectedChecks = checkBoxesValidation();
    console.log("selectedChecks", selectedChecks);


    console.log(selectBox);
    console.log(selectBox.value);


})


myForm.addEventListener('reset', function (event) {
    event.preventDefault();

    console.log("------- reset event is triggered --------")
    nameInp.value = "";
    emailInp.value = "";
    selectBox.value = "";


    // reset radio validation
    for (let i = 0; i < radios.length; i++) {

        console.log(radios[i]);
        radios[i].checked = false
    }

    // reset checkbox validation
    for (let i = 0; i < eduChecks.length; i++) {
        eduChecks[i].checked = false;
    }

})

// LET vs CONST



let letUserData = {
    name: "ali",
    age: 32,
    weight: 90
}
console.log("letUserData", letUserData);

letUserData = {};


console.log("letUserData", letUserData);

const constantUserData = {
    name: "ali",
    age: 32,
    weight: 90
}

console.log("constantUserData", constantUserData);
constantUserData = {} // throw an error Assignment to constant variable.
console.log("constantUserData", constantUserData);


