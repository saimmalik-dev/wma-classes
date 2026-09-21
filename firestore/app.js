
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js"; // firebase-app.js -> mtlb complete firebase app ko lekr ao.

import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js"; // firebase-auth.js -> mtlb firebase ki app mein se "authentication" ki service lekr ao

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

// // Initialize Realtime Database and get a reference to the service
// const database = getDatabase(app);

const db = getFirestore(app) // database ki service lekr ao, is app k liye
console.log(db) // database ki service ko console mein print krdo





const todo = document.getElementById("todo")

const form = document.getElementById("form")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const todoValue = todo.value;
    const collectionRef = collection(db, "todos")
    const documentObj = {
        todo: todoValue,
        createdAt: Date.now()
    }

    addDoc(collectionRef, documentObj).then((res) => {
        console.log("response data added");

    }).catch((err) => {
        console.log(err)
    })
})