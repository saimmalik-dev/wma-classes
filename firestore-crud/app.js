
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getFirestore, addDoc, collection, getDocs, getDoc, doc, where, orderBy, updateDoc, } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7dcefnMBgFThxML0OJ5rwetPDWf5YMfQ",
    authDomain: "firestore-crud-1c49c.firebaseapp.com",
    projectId: "firestore-crud-1c49c",
    storageBucket: "firestore-crud-1c49c.firebasestorage.app",
    messagingSenderId: "524081270098",
    appId: "1:524081270098:web:b2a7b5afb7af64dd19be8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const todosRef = collection(db, "todos") // whole collection refercence

const form = document.getElementById('form');
const todoInp = document.getElementById('todo');
const btn = document.getElementById("btn")
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const todoValue = todoInp.value;
    const obj = {
        title: todoValue,
        createdAt: Date.now()
    }
    addDoc(todosRef, obj).then((res) => {
        alert("todo added successfully")
        getTodos();

    }).catch((err) => {
        console.log("error", err);

    })
})

// Get data from firestore
// 1. Call a method to get the data once. (getdoc)
// 2. Set a listener to receive data-change events. (onSnapshot)
// 3. Get whole collection data. (getDocs)

const outputDiv = document.getElementById("output")
// getDocs, getDoc
// Get data in bluk from firestore
const getTodos = () => {
    outputDiv.innerHTML = "Loading...."
    // const q = query(todosRef, orderBy("creatAt", "asc"))
    getDocs(todosRef).then((result) => {
        outputDiv.innerHTML = ""
        console.log("all todos:", result);
        result.forEach(todo => {
            console.log(todo);
            console.log("todo.data().", todo.data());


            const mainTodoDiv = document.createElement("div") // main todo item div
            const h4 = document.createElement("h4")
            const editBtn = document.createElement("button")
            const deleteBtn = document.createElement("button")
            mainTodoDiv.setAttribute("id", "todo-item")
            h4.innerText = todo.data().title;
            // h4.innerText = todo.data().creatAt;
            editBtn.innerText = "Edit"
            // editBtn.onclick = editFunction(todo.id) // invalid
            editBtn.onclick = () => editFunction(todo.id) // implicit return



            // editBtn.onclick = () => editFunction(todo.id)


            deleteBtn.innerText = "Delete"

            console.log("actual todo:", todo.id);
            console.log("actual todo:", todo.data());

            mainTodoDiv.appendChild(h4)
            mainTodoDiv.appendChild(editBtn)
            mainTodoDiv.appendChild(deleteBtn)
            outputDiv.appendChild(mainTodoDiv)
        });
    }).catch((err) => {
        console.log("err", err);

    })
}
getTodos()




const editFunction = (id) => {
    console.log("Edit todo id;:", id);
    const docRef = doc(todosRef, id) // todosRef -> /todos, docRef -> document reference
    getDoc(docRef).then((res) => { // get single element
        // console.log("res", res);
        // console.log("res", res.data());
        const singleTodo = res.data();
        console.log("todoInp", todoInp);
        console.log("singleTodo", singleTodo);

        todoInp.value = singleTodo.title
        // btn.removeEventListener("click"); // remove previous listener  (which is creating new document)
        btn.innerText = "Update"
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const updatedObj = {
                title: todoInp.value
            }
            updateDoc(docRef, updatedObj).then((res) => {
                alert("Document updated ")
                getTodos()
                todoInp.value = ""
            }).catch((err) => {
                console.log(err);

            })
        })
    }).catch((err) => {
        console.log("error", err);

    })
}