
import { doc, getDocs, collection, query, where, serverTimestamp, addDoc } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";

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
        const messageCollection = await collection(db, "chats", chatId, "messages")
        const allMessages = await getDocs(messageCollection)
        console.log("allMessages", allMessages)
        allMessages.forEach(item => {
            const message = item.data();
            console.log("message", message);

            const div = document.createElement("div")
            const title = document.createElement("h2")
            const timestamp = document.createElement("h5")


            title.innerText = message.message
            timestamp.innerText = message.createdAt


            div.appendChild(title)
            div.appendChild(timestamp)
            messagesDiv.appendChild(div)
        });
    } catch (err) {
        console.log(err);

    }
}

getMessages()