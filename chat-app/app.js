// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";
import { getFirestore, doc, setDoc, collection } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQ8-72UGYoYZ8wg1uxnEqjk8zTFMGlrcE",
    authDomain: "chat-app-a367d.firebaseapp.com",
    projectId: "chat-app-a367d",
    storageBucket: "chat-app-a367d.firebasestorage.app",
    messagingSenderId: "169336814542",
    appId: "1:169336814542:web:d9956982911ce1a238899f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
const usersCollectionRef = collection(db, "users")


const email = document.getElementById("email")
const password = document.getElementById("password")
const name = document.getElementById("name")
const btn = document.getElementById("btn")
const signupForm = document.getElementById("signupForm")
if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(auth, email.value, password.value)
            console.log(user);
            console.log(user.user);
            localStorage.setItem("user", JSON.stringify(user.user))
            localStorage.setItem("id", user.user.uid)
            // const docId = await doc(usersCollectionRef, user.user.uid);
            // await setDoc(docId, {
            //     name: name.value,
            //     email: email.value,
            //     password: password.value,
            //     id: user.user.uid,
            // })
            window.location.href = "userslist.html"
        } catch (err) {
            console.log(err);

        }
    })
}