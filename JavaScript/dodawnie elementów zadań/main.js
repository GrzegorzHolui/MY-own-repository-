const form = document.querySelector('form');
const ul = document.querySelector('ul');
const amountSpan = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task');
const input = document.querySelector('input');
let toDoList = [];
const renderList = () => {
    ul.textContent = "";
    toDoList.forEach((element, key) => {
        element.dataset.key = key;
        ul.appendChild(element);
    })
}
const removeTask = (e) => {
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1)
    renderList();
    amountSpan.textContent = listItems.length;
}
const addTask = (e) => {
    e.preventDefault();
    const task = input.value;
    const li = document.createElement('li');
    li.className = 'task';
    li.innerHTML = task + '<button> Usuń </button>';
    toDoList.push(li);
    ul.textContent = "";
    toDoList.forEach((element, key) => {
        element.dataset.key = key;
        ul.appendChild(element);
    })
    //ul.appendChild(li);
    amountSpan.textContent = listItems.length;
    li.querySelector('button').addEventListener('click', removeTask);
}
form.addEventListener('submit', addTask);