
import {
    collection,
    getDocs,
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";
import { db } from "./app.js";
console.log("db", db);
const productCollectionRef = collection(db, "products")
console.log("website js");

const outputDiv = document.getElementById("output")
const getProducts = async () => {
    console.log("get products");

    try {
        const getAllProducts = await getDocs(productCollectionRef);
        getAllProducts.forEach((rawProduct, index) => {
            console.log("rawProduct", rawProduct);
            const product = rawProduct.data()
            console.log(product);

            outputDiv.innerHTML = outputDiv.innerHTML + `

 <div class="card col-3" >
            <img src="${product.prodImg}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.desc}</p>
                <p class="card-text">${product.price}</p>
                <p class="card-text">${product.rating}</p>
                <a href="#" class="btn btn-primary">Order Now</a>
            </div>
        </div> `
        });
    } catch (err) {
        console.log("error", err);


    }
}
getProducts()