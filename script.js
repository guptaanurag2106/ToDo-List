const textbox = document.querySelector(".textbox");
const add_item = document.querySelector(".add_item");
const list_items = document.querySelector(".list_items");

add_item.addEventListener("click", additem);
list_items.addEventListener("click", compDel);

textbox.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        additem(event);
    }
});

window.onload = getTodos();
function additem(e) {
    e.preventDefault();

    saveLocalTodos(textbox.value);
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("div");

    const item = document.createElement("li");
    item.classList.add("item");
    item.innerText = textbox.value;

    const complete_btn = document.createElement("button");
    complete_btn.classList.add("complete_btn");
    complete_btn.innerHTML = '<i class="fa fa-check"></i>';

    const del_btn = document.createElement("button");
    del_btn.classList.add("del_btn");
    del_btn.innerHTML = '<i class="fa fa-trash"></i>';

    if (textbox.value != "") {
        todoDiv.appendChild(item)
        todoDiv.appendChild(complete_btn);
        todoDiv.appendChild(del_btn);
        list_items.appendChild(todoDiv);
    }
    textbox.value = "";

}

function compDel(e) {
    const list_item = e.target;
    if (list_item.classList[0] == "del_btn") {
        list_item.parentElement.remove();
        removeTodo(list_item.parentElement.children[0].innerText)
    }

    else if (list_item.classList[0] == "complete_btn")
        list_item.parentElement.classList.toggle("completed");
}

function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null)
        todos = [];
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos))
}

function getTodos() {
    let todos;
    if (localStorage.getItem("todos") === null)
        todos = [];
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.forEach(element => {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("div");

        const item = document.createElement("li");
        item.classList.add("item");
        item.innerText = element;

        const complete_btn = document.createElement("button");
        complete_btn.classList.add("complete_btn");
        complete_btn.innerHTML = '<i class="fa fa-check"></i>';

        const del_btn = document.createElement("button");
        del_btn.classList.add("del_btn");
        del_btn.innerHTML = '<i class="fa fa-trash"></i>';

        if (element != "") {
            todoDiv.appendChild(item)
            todoDiv.appendChild(complete_btn);
            todoDiv.appendChild(del_btn);
            list_items.appendChild(todoDiv);
        }
    });
}

function removeTodo(todo) {
    let todos;
    if (localStorage.getItem("todos") === null)
        todos = [];
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    if (todos.indexOf(todo) != -1) {
        todos.splice(todos.indexOf(todo), 1)
        localStorage.setItem("todos", JSON.stringify(todos));
    }
}
