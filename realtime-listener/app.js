
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc, onSnapshot, serverTimestamp, orderBy, query } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js"; // get firestore service from this link
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
const chatsCollectionRef = collection(db, "chats")

const form = document.getElementById("send-form")
const messageInp = document.getElementById("message")
const btn = document.getElementById("btn")
localStorage.setItem("user", "user")

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const user = localStorage.getItem("user")
    const obj = {
        title: messageInp.value,
        createdAt: Date.now(),
        type: user,
        timestamp: serverTimestamp()
    }
    await addDoc(chatsCollectionRef, obj)

    // getTodos()
    // console.log("Document written with ID: ", docRef.id);

})

// Get all todos
const output = document.getElementById("messsages")

const q = query(chatsCollectionRef, orderBy("timestamp", "desc"),);
// const unsubscribe = onSnapshot(q, (querySnapshot) => {
onSnapshot(q, (querySnapshot) => {
    const messages = [];
    output.innerHTML = ""
    return querySnapshot.forEach((doc, index) => {
        console.log(doc.data());

        messages.push(doc.data().name);
        let message = doc.data()

        const div = document.createElement('div')
        div.style.border = "1px solid blue"
        // div.setAttribute("border", )
        const h4 = document.createElement('h4')
        const span = document.createElement('span')

        h4.innerText = message.title;
        span.innerText = "from" + message.type

        div.appendChild(h4)
        div.appendChild(span)
        output.appendChild(div)

    });

    // console.log("Current cities in CA: ", cities.join(", "));
});




// const getTodos = () => {
//     output.innerHTML = "Loading Todos...."
//     getDocs(todosCollectionRef).then((result) => {
//         console.log("all todo dataL", result);
//         output.innerHTML = ""
//         result.forEach((item, index) => {
//             const todo = item.data();
//             console.log("todo", todo);
//             console.log("id", item.id);

//             const div = document.createElement('div')
//             const h4 = document.createElement('h4')
//             const editBtn = document.createElement('button')
//             const deleteBtn = document.createElement('button')
//             h4.innerText = todo.title;
//             editBtn.innerText = "EdiT"
//             editBtn.onclick = () => editFunction(item.id)
//             deleteBtn.innerText = "DELETE"
//             deleteBtn.onclick = () => deleteFunction(item.id)

//             div.appendChild(h4)
//             div.appendChild(editBtn)
//             div.appendChild(deleteBtn)

//             output.appendChild(div)

//         })


//     }).catch((err) => {
//         console.log(err);
//     })
// }

// getTodos()


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
















// // Async/Await concept
// getDocs(userCollectionRef).then((res) => {
//     console.log("all users will be fetched");
//     // get single user details
//     getDoc(user.id).then((res) => {
//         console.log("Single user details");
//         // now get all the posts of that specific user
//         getDocs(postCollectionRef).then((res) => {
//             console.log("All posts by that user");
//             // get single post likes and comments
//             getDoc(post.id).then((res) => {
//                 // single post likes or comments
//             }).catch((err) => {
//                 console.log(err);

//             })
//         }).catch((err) => {
//             console.log(err);
//         })
//     }).catch((err) => {
//         console.log(err);
//     })
// }).catch((err) => {
//     console.log(err);

// })

// const ASYNCFunc = async () => {
//     try {

//         const allUser = await getDocs(userCollectionRef)
//         const userDetails = await getDoc(allUser[0].id)
//         const allPostofUser = await getDocs(postCollectionRef)
//         const detailsOfUserPosts = await getDoc(post[0].id)

//     } catch (err) {
//         console.log("Error", err);

//     }

// }