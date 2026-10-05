// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import {
    getFirestore,
    setDoc,
    doc,
    collection,
    serverTimestamp,
    getDoc,
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGd_CdNX9wlg7KNH8usbLoaSHCxIAxuXA",
    authDomain: "dynamic-website-badc8.firebaseapp.com",
    projectId: "dynamic-website-badc8",
    storageBucket: "dynamic-website-badc8.firebasestorage.app",
    messagingSenderId: "430317438268",
    appId: "1:430317438268:web:34273183a5311804e70a39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app)
const usersCollectionRef = collection(db, "users")


let signupEmail = document.getElementById("signup-email")
let signupPassword = document.getElementById("signup-password")
// Signup form handler
const signupForm = document.getElementById("signup-form");
if (signupForm) {
    signupForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = signupEmail.value.trim();
        const password = signupPassword.value;

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User signed up:", userCredential.user);
            console.log("User ID:", userCredential.user.uid);
            const docId = await doc(usersCollectionRef, userCredential.user.uid)
            await setDoc(docId, {
                email: email,
                password: password,
                createdAt: serverTimestamp(),
                userId: userCredential.user.uid
            })
            alert("Signup successful!");
            signupForm.reset();
        } catch (error) {
            console.error("Signup error:", error.code, error.message);
            alert(error.message);
        }
    });
}

let loginEmail = document.getElementById("login-email")
let loginPassword = document.getElementById("login-password")
// Login form handler
const loginForm = document.getElementById("login-form");
if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = loginEmail.value.trim();
        const password = loginPassword.value;

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in:", userCredential.user);
            // get user details from firestore
            const rawUser = await getDoc(doc(usersCollectionRef, userCredential.user.uid))
            const user = await rawUser.data()
            console.log("user", user);

            alert("Login successful!");
            loginForm.reset();
        } catch (error) {
            console.error("Login error:", error.code, error.message);
            alert(error.message);
        }
    });
}


