
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js"; // firebase-app.js -> mtlb complete firebase app ko lekr ao.
import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    // imports for google sign-in
    GoogleAuthProvider, signInWithPopup,
    // imports for phone number sign in 
    RecaptchaVerifier, signInWithPhoneNumber
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js"; // firebase-auth.js -> mtlb firebase ki app mein se "authentication" ki service lekr ao
import { getDatabase,collection  } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js"; // firebase-auth.js -> mtlb firebase ki app mein se "authentication" ki service lekr ao

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBymWgd6FLznQpkC8GRvrW-qEI73xhyOSI",
    authDomain: "authentication-54f54.firebaseapp.com",
    databaseURL: "https://authentication-54f54-default-rtdb.firebaseio.com",
    projectId: "authentication-54f54",
    storageBucket: "authentication-54f54.firebasestorage.app",
    messagingSenderId: "481007716898",
    appId: "1:481007716898:web:2789586dee7717e728587b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app) // auth ki service lekr ao, is app k liye

// // Initialize Realtime Database and get a reference to the service
// const database = getDatabase(app);

const db = getDatabase(app) // database ki service lekr ao, is app k liye



const email = document.getElementById("email");
const password = document.getElementById("password");
const signupForm = document.getElementById("signup-form");
const signinBtn = document.getElementById("signin");
// signupForm.addEventListener("submit", (e) => {
//     e.preventDefault(); // prevent the default form submission behavior

//     const emailValue = email.value;
//     const passwordValue = password.value;

//     createUserWithEmailAndPassword(auth, emailValue, passwordValue).then((res) => {
//         alert("User created successfully!");
//         console.log(res)
//     })
//         .catch((err) => {
//             console.log(err);

//         })


// })




// async/await syntax
// signinBtn.addEventListener("click", async (e) => {
//     try {
//         e.preventDefault()

//         const emailValue = email.value;
//         const passwordValue = password.value;

//         const user = await signInWithEmailAndPassword(auth, emailValue, passwordValue)
//         const users = await getUser(user.uid)
//         const userDetails = await getUserDetails(user.uid)
//         console.log(user);

//         // .then((res) => {
//         alert("User signed in successfully!");
//         //     console.log(res)
//         // })

//     } catch (err) {
//         console.log(err);

//     }


// })






signinBtn.addEventListener("click", (e) => {

    e.preventDefault()

    const emailValue = email.value;
    const passwordValue = password.value;

    signInWithEmailAndPassword(auth, emailValue, passwordValue).then((res) => {
        alert("User signed in successfully!");
        console.log(res)
        getUserData(res.user.uid).then((res) => {
            console.log(res)
            getUserDetails(res.uid).then((res) => {
                console.log("user details", res)
            })
        })
    })
        .catch((err) => {
            console.log(err);

        })

})



const googleSigninBtn = document.getElementById("google-signin");
googleSigninBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const provider = new GoogleAuthProvider();
    console.log(provider)

    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...

            console.log(user, token)
        }).catch((error) => {
            // Handle Errors here.
            console.log(error)
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });

})



// SignUp using phone number
const phone = document.getElementById("phone");
const phoneForm = document.getElementById("phone-form");
const phoneBtn = document.getElementById("phone-btn")


phoneForm.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent the default form submission behavior

    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'phone-btn', {
        'size': 'invisible',
        'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            onSignInSubmit();
        }
    });
    const phoneNumber = phone.value;
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            // ...
        }).catch((error) => {
            // Error; SMS not sent
            console.log(error)
            // ...
        });



})
