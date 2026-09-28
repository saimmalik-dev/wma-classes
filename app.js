let todos = [];
let inp = document.getElementById("input")
let btn = document.getElementById("btn")
let outputDiv = document.getElementById("output")
// let editIndex = -1

btn.addEventListener("click", addTodo = (e) => {
    e.preventDefault();
    const obj = {
        title: inp.value,
        createdAt: Date.now(),
        status: false,
        id: todos.length + 1
    }
    todos.push(obj)
    getTodos()
})


const getTodos = () => {
    outputDiv.innerHTML = ""
    console.log("print todos", todos);

    // const allTodos = localStorage.getItem("")
    todos.forEach((item, index) => {
        const mainDiv = document.createElement("div")
        const div = document.createElement("div")
        const titleDiv = document.createElement("div")
        const statusInp = document.createElement("input")
        const title = document.createElement("h4")
        const editBtn = document.createElement("button")
        const deleteBtn = document.createElement("button")


        title.innerText = item.title;
        statusInp.setAttribute("type", "checkbox");
        // statusInp.type = "checkbox";
        statusInp.checked = item.status;
        editBtn.innerText = "Edit"
        editBtn.addEventListener("click", () => {
            // editIndex = index
            editFunction(item.id, index)
        })
        editBtn.click = console.log("edit");

        deleteBtn.innerText = "Delete"

        mainDiv.setAttribute("id", "todo-item")
        titleDiv.setAttribute("id", "todo-item")
        titleDiv.appendChild(statusInp)
        titleDiv.appendChild(title)
        div.appendChild(editBtn)
        div.appendChild(deleteBtn)
        // mainDiv.appendChild(statusInp)
        // mainDiv.appendChild(title)
        mainDiv.appendChild(titleDiv)
        mainDiv.appendChild(div)

        // Append to the static div created outside of it.
        outputDiv.appendChild(mainDiv)

    })
}

getTodos()

let editTodo = null
let editIndex = -1
const editFunction = (id, index) => {

    // Step:1 -> find the todo, set the inp with todo value
    // if (!id) return;
    console.log("index", index);

    const todo = todos.filter((item) => item.id == id)
    console.log("todo", todo);
    console.log("todo", todo[0].title);

    inp.value = todo[0].title;
    btn.innerText = 'Save Todo'
    editIndex = index
    editTodo = todo



    btn.removeEventListener('click', addTodo) // remove old add listener

    btn.addEventListener("click", () => { // add new listener for edit
        console.log("editTodo", editTodo);

        const updatedTodo = {
            title: inp.value,
            createdAt: editTodo[0].createdAt,
            status: editTodo[0].status,
            id: editTodo[0].id
            // ...todo // rest operator -> 
        }
        // let editIndex = todos.findIndex(todo[0].title)
        console.log("updatedTodo", updatedTodo);

        console.log(todos);
        todos[editIndex] = updatedTodo

        console.log(todos);
        getTodos()
    })

    console.log(todos);

}
