// EVENTS IN JS

function loginFunc(email, password) {
    console.log("--email--", email);  // test@123.com
    console.log("--password--", password); // undefined
    console.log("--!!email--", !!email); // true
    console.log("--!!password--", !!password); // false

    console.log("!email", !email);  // false
    console.log("!password", !password); //  true



    if (!email || !password) {
        // else if (!email || !password) {
        alert("Enter both email and password")
        return "Enter both email and password";
    }
    console.log("Login Function called");
    console.log("email", email);
    console.log("password", password);
    console.log("Login Success!");


}



var btn = document.getElementsByName("button")
console.log("btn", btn); // HTMLCollection(1) [button]



var date = new Date();
// var day = date.getDay();;
console.log("date", date.toDateString());
console.log("date", date.toTimeString());
console.log("date", date.toLocaleTimeString());
console.log("date", date.toLocaleDateString());
// console.log("day", day);
// console.log("hours", date.getISODate());