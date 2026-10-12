
import { doc, getDocs, collection, query, where, setDoc } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";

import { db } from "./app.js"

console.log("db", db);
// const chatsCollectionRef = collection(db, "chats")
const usersCollectionRef = collection(db, "users")
console.log(db);
const usersDiv = document.getElementById("users")

const userId = localStorage.getItem("id")




const getAllUsers = async () => {
    try {

        console.log(userId);

        const q = await query(usersCollectionRef, where("id", "!=", userId))
        const allUsers = await getDocs(q);
        allUsers.forEach(item => {
            const user = item.data();
            const div = document.createElement("div")
            const title = document.createElement("h2")
            const email = document.createElement("h4")
            div.style.border = "1px solid red"
            title.innerText = "User: " + user.name;
            email.innerText = "Email: " + user.email;
            // email.innerText = "Email: " + user.id;
            div.appendChild(title);
            div.appendChild(email);
            usersDiv.appendChild(div);
            div.addEventListener('click', () => createChatId(user.id))
        });
    } catch (err) {
        console.log(err);

    }
}
getAllUsers()

// show loggedin user details
const userName = document.getElementById("user-name")
const userEmail = document.getElementById("user-email")
const user = localStorage.getItem("user")
const loggedInUser = JSON.parse(user)
userName.innerText = loggedInUser.email.split("@")[0]
userEmail.innerText = loggedInUser.email


// Create chat_id in firestore when loggedin user clicks on specific user.
const createChatId = async (id) => {
    try {
        console.log("create chat id");


        let loggedInUserId = localStorage.getItem("id");
        console.log("loggedInUserId", loggedInUserId);
        console.log("id from param", id);

        const chatId = loggedInUserId + "_" + id; // dkzejsShjdUoxS2GjBscOwc5LpN2 + kfDfvZQinRYgjIqelLuKrUcWr6E3 -> 
        console.log("chatId", chatId);

        // Reference your subcollection
        const messagesCollectionRef = collection(db, "chats", chatId, "messages");

        // Create a hidden placeholder document
        await setDoc(doc(messagesCollectionRef, "init_placeholder"), {
            isPlaceholder: true,
            createdAt: new Date()
        });


        localStorage.setItem("recieverId", id)
        localStorage.setItem("chatId", chatId)


        window.location.href = "./messages.html"
    }
    catch (err) {
        console.log("err", err);

    }

}
