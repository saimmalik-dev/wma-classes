// // const promise = new Promise() // it accepts a function with two parameters resolve and reject


// //     (resolve, reject)=> { // executor function, which is accepted by the promise constructor

// // }

// const promise = new Promise((resolve, reject) => {
//     resolve('This is my resolved data') // this will be called when the promise is fulfilled
//     reject('This is my rejected data') // this will be called when the promise is rejected
// })

// // promise.then()


// //    const onfulfilled=  ()=> { // onfulfilled function, which is called when the promise is fulfilled

// // }
// // promise.then(onfulfilled)



// promise.then((response) => {
//     console.log("Show user data on page");
// }).then((result) => {
//     console.log("Show success message on page");
// })
// .catch((error) => {
//     console.log("Show error message on page");
// }).finally((result) => {
//     console.log("Finally, Promise is either fulfilled or rejected");
// })



let input = document.getElementById('input')
let btn = document.getElementById('btn')
let output = document.getElementById('output')
let todos = []

btn.addEventListener('click', () => {
    let task = input.value;
    if (!task) {
        alert("Please enter a task")
        return;
    }

    let obj = {
        task: task,
        id: todos.length + 1
    }
    todos.push(obj)
    showTasks()
    input.value = ""
})


// let editBtn = document.getElementById('edit')
// editBtn.addEventListener('click', () => {
//     let task = input.value;
// })


// let deleteBtn = document.getElementById('delete')
// deleteBtn.addEventListener('click', () => {
//     let task = input.value;
// })

let editId;
let showTasks = () => {
    console.log(todos);
    output.innerHTML = ""
    todos.map((item, index) => {
        console.log("item", item);
        const todoDiv = document.createElement("div")
        todoDiv.setAttribute("id", "todo-item")
        const todoTitle = document.createElement("h4")
        const editBtn = document.createElement("button")
        editBtn.innerText = "Edit" + item.id

        editId = item.id;
        const deleteBtn = document.createElement("button")
        deleteBtn.innerText = "Delete"


        todoTitle.innerText = item.task;
        todoDiv.appendChild(todoTitle)
        todoDiv.appendChild(editBtn)
        todoDiv.appendChild(deleteBtn)



        output.append(todoDiv)
    })



}

// logic for edit and delete buttons
// edit button -> click event
// edit button -> get id of that specific todo-item
// edit click -> pr input focus
// retype kr k update
// 













