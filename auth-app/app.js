const auth = firebase.auth(); // get the authentication service from firebase.




const email = document.getElementById("email");
const password = document.getElementById("password");
const signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent the default form submission behavior

    const emailValue = email.value;
    const passwordValue = password.value;

    auth.createUserWithEmailAndPassword(emailValue, passwordValue).then((res) => {
        alert("User created successfully!");
        console.log(res)
    })
        .catch((err) => {
            console.log(err);

        })


})