
// EVENTS IN JS #5 (Form Validations)

var radios = document.getElementsByName("gender")
console.log("radios", radios);
// console.log("radios", radios[0].value);
// console.log("radios", radios[0].value);


var eduChecks = document.getElementsByName("education")
// console.log(eduChecks);


// for (let i = 0; i < eduChecks.length; i++) {
//     // if (i.checked) {
//     console.log("i.checked", i.check);

//     // }
// }


function checkRadio() {

    var radioChecked = false;
    var selectedGender = null;

    for (let i = 0; i < radios.length; i++) {
        // if (i.checked) {
        console.log("i.checked", radios[i]);
        console.log("i.checked", radios[i].value);
        console.log("i.checked", radios[i].checked);

        if (radios[i].checked == true) {
            radioChecked = true;
            selectedGender = radios[i]
            return selectedGender;
        }

    }

    if (!radioChecked) {
        alert("Please select gender")
        return null;
    }



}


var myForm = document.getElementById("form");
myForm.addEventListener('submit', function (event) {
    event.preventDefault();

    console.log("------- onsubmit event is triggered --------")

    var gender = checkRadio();
    console.log("|gender", gender);
    // console.log("|gender", gender.value);

    // CHECKBOX VALIDATION
    var eduCheck = false;
    var eduCheckArr = [];
    for (let i = 0; i < eduChecks.length; i++) {
        console.log("eduChecks[i]", eduChecks[i]);

        if (eduChecks[i].checked == true) {
            eduCheck = true;
            eduCheckArr.push(eduChecks[i].value)
        }
    }
    if (!eduCheck) {
        alert("Please select education")
        return;
    }
    console.log(eduCheckArr);





    var payload = {
        gender: gender.value,
    }


    console.log("payload:", payload)

})



// myForm.addEventListener('reset', function (event) {
//     event.preventDefault();

//     alert("Form has been reset!");
//     console.log("------- reset event is triggered --------")
//     // console.log("select country:", selectCountry.value)
//     selectCountry.value = ""
//     inpName.value = ""
//     // console.log("inpName:", inpName.value)



// })