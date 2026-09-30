
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js"; // get firestore service from this link
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZZ1-2UW3kHWb1bME2OzFT5dJA44-43Vc",
    authDomain: "todolist-b0e03.firebaseapp.com",
    projectId: "todolist-b0e03",
    storageBucket: "todolist-b0e03.firebasestorage.app",
    messagingSenderId: "19375153899",
    appId: "1:19375153899:web:304d8d71e83b1b5d0c14ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const todosCollectionRef = collection(db, "todos")

const form = document.getElementById("todo-form")
const todoInp = document.getElementById("todo-inp")
const btn = document.getElementById("btn")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const obj = {
        title: todoInp.value,
        createdAt: Date.now(),
    }
    addDoc(todosCollectionRef, obj).then((res) => {
        console.log("res");
        alert("Added todo")
        getTodos()
    }).catch((err) => {
        console.log(err);

    })
    // console.log("Document written with ID: ", docRef.id);

})

// Get all todos
const output = document.getElementById("output")
const getTodos = () => {
    output.innerHTML = "Loading Todos...."
    getDocs(todosCollectionRef).then((result) => {
        console.log("all todo dataL", result);
        output.innerHTML = ""
        result.forEach((item, index) => {
            const todo = item.data();
            console.log("todo", todo);
            console.log("id", item.id);

            const div = document.createElement('div')
            const h4 = document.createElement('h4')
            const editBtn = document.createElement('button')
            const deleteBtn = document.createElement('button')
            h4.innerText = todo.title;
            editBtn.innerText = "EdiT"
            editBtn.onclick = () => editFunction(item.id)
            deleteBtn.innerText = "DELETE"
            deleteBtn.onclick = () => deleteFunction(item.id)

            div.appendChild(h4)
            div.appendChild(editBtn)
            div.appendChild(deleteBtn)

            output.appendChild(div)

        })


    }).catch((err) => {
        console.log(err);
    })
}

getTodos()


const editFunction = (id) => {
    console.log("Edit", id);

    const docRef = doc(todosCollectionRef, id)
    getDoc(docRef).then((res) => {
        const singleTodo = res.data();
        console.log("todo to be edited:", singleTodo);
        todoInp.value = singleTodo.title;

        // change save btn to edit btn
        btn.innerText = "Update todo"
        btn.addEventListener("click", () => {

            const obj = {
                title: todoInp.value,
                createdAt: singleTodo.createdAt
            }
            updateDoc(docRef, obj).then((res) => {
                console.log("res", res);
                alert("Todo udpated");
                getTodos()
            }).catch((err) => {
                console.log(err);

            })
        })


    })
}

const deleteFunction = (id) => {
    console.log("delete", id);

    const docRef = doc(todosCollectionRef, id)

    deleteDoc(docRef).then((res) => {
        console.log("res", res);
        alert("Todo delete successfully");
        getTodos()
    }).catch((err) => {
        console.log(err);

    })


}