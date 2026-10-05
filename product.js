import {
    addDoc,
    doc,
    collection,
    serverTimestamp,
    getDoc,
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

import { db } from "./app.js"
console.log("db", db);
const productCollectionRef = collection(db, "products")

const prodName = document.getElementById("name")
const prodImg = document.getElementById("img")
const prodPrice = document.getElementById("price")
const prodDesc = document.getElementById("desc")
const prodRating = document.getElementById("rating")

const productForm = document.getElementById("product-form")
productForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const obj = {
        name: prodName.value,
        prodImg: prodImg.value,
        price: prodPrice.value,
        desc: prodDesc.value,
        rating: prodRating.value,
        createdAt: serverTimestamp(),
        // updatedAt : serverTimestamp(),
    }
    try {
        await addDoc(productCollectionRef, obj)
        alert("product  adedd successfully");

    }
    catch (err) {

    }
})