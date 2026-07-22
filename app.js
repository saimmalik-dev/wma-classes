let nameInp = document.getElementById("name")
let radios = document.getElementsByName("gender")
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

var myForm = document.getElementById("form");
myForm.addEventListener('submit', function (event) {
    event.preventDefault();

    console.log("------- onsubmit event is triggered --------")


    if (nameInp.value == "") {
        alert("Enter your name")
        return
    }
    console.log("nameInp.value ", nameInp.value);


    // if (nameInp.value == "") {
    //     alert("Enter your name")
    // }

    // console.log("total radio", radios);

    let gender = checkRadio();
    console.log("gender", gender);



    let selectedChecks = checkBoxesValidation();
    console.log("selectedChecks", selectedChecks);




})



