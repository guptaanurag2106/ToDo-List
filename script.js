const textbox = document.querySelector(".textbox");
const add_item = document.querySelector(".add_item");
const list_items = document.querySelector(".list_items");

add_item.addEventListener("click", additem);
list_items.addEventListener("click", compDel);


function additem(e) {
    e.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("div");

    const item = document.createElement("li");
    item.classList.add("item");
    item.innerText = textbox.value;

    const complete_btn = document.createElement("button");
    complete_btn.classList.add("complete_btn");
    complete_btn.innerHTML = "completed";

    const del_btn = document.createElement("button");
    del_btn.classList.add("del_btn");
    del_btn.innerHTML = "delete";

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
    console.log(list_item.parentElement)
    list_item.parentElement.remove();
}