// EVENTS IN JS #4 (Form Events)


var inpName = document.getElementById("name");
inpName.addEventListener("input", function (event) {
    console.log("input event is triggered:", event.target.value)
}

) // accept two parameters, first is event name and second is function for that event. 



var inpName = document.getElementById("name");
inpName.addEventListener("change", function (event) {
    console.log("onchage event is triggered:", event.target.value)
})














var selectCountry = document.getElementById("country");

selectCountry.addEventListener("change", function (event) {
    console.log("onchange event is triggered:", event.target)
    console.log("onchange event is triggered:", event.target.value)

})



var myForm = document.getElementById("form");
myForm.addEventListener('submit', function (event) {
    event.preventDefault();



    console.log("------- onsubmit event is triggered --------")
    if (selectCountry.value == "") {
        alert("Please select a country!");
        return;
    }

    console.log("select country:", selectCountry.value)
    console.log("inpName:", inpName.value)


    var payload = {
        name: inpName.value,
        country: selectCountry.value
    }


    console.log("payload:", payload)

})



myForm.addEventListener('reset', function (event) {
    event.preventDefault();

    alert("Form has been reset!");
    console.log("------- reset event is triggered --------")
    // console.log("select country:", selectCountry.value)
    selectCountry.value = ""
    inpName.value = ""
    // console.log("inpName:", inpName.value)



})

