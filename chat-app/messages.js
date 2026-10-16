
import { doc, getDocs, collection, query, where, serverTimestamp, addDoc, onSnapshot,orderBy } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";

import { db } from "./app.js"

// Send message 

const senderId = localStorage.getItem("id") // sender id will be the loggedin user id
const recieverId = localStorage.getItem("recieverId") // 
const message = document.getElementById("message")
const btn = document.getElementById("btn")
const chatId = localStorage.getItem("chatId")
btn.addEventListener("click", async (e) => {
    e.preventDefault();
    try {

        console.log("senderId", senderId);
        console.log("recieverId", recieverId)
        console.log("chatId", chatId)
        const messageCollection = await collection(db, "chats", chatId, "messages")
        await addDoc(messageCollection, {
            message: message.value,
            createdAt: serverTimestamp(),
            senderId: senderId,
            recieverId: recieverId,
        })
        getMessages()
    } catch (err) {
        console.log("catch", err);

    }
})


const messagesDiv = document.getElementById("messages")
const getMessages = async () => {

    try {
        const userId = localStorage.getItem("id")
        const messageCollection = await collection(db, "chats", chatId, "messages")
        const q = query(messageCollection, orderBy("createdAt", "asc"));
        await onSnapshot(q, (querySnapshot) => {
            messagesDiv.innerHTML = null
            querySnapshot.forEach(item => {
                const message = item.data();
                console.log("message", message);

                const div = document.createElement("div")
                const title = document.createElement("h2")
                const timestamp = document.createElement("h5")


                title.innerText = message.message
                title.style.textAlign = message.senderId === userId ? "right" : "left" // ternary operator
                title.style.backgroundColor = message.senderId === userId ? "green" : "wheat" // ternary operator
                title.style.color = message.senderId === userId ? "white" : "black" // ternary operator
                // if (message.senderId === userId) {
                //     title.style.textAlign = "right"
                // } else {
                //     title.style.textAlign = "left"
                // }
                // timestamp.innerText = message.createdAt


                div.appendChild(title)
                div.appendChild(timestamp)
                messagesDiv.appendChild(div)
            });
        })
        console.log("allMessages", allMessages)

    } catch (err) {
        console.log(err);

    }
}

getMessages()