const form = document.querySelector('form');
const h1 = document.querySelector('h1 span');
const ul = document.querySelector('ul');
const input = document.querySelector('input');
const listLI = document.getElementsByClassName('tasks')

const removeTask = (e) => {
    e.target.parentNode.remove();
    h1.textContent = document.querySelectorAll('li').length;
}

const addTask = (e) => {
    e.preventDefault()
    const value = input.value;
    // if (input.value == "") {
    //     return
    // }
    const task = document.createElement('li');
    task.className = "tasks";
    task.innerHTML = value + "<button>Usuń </button>";
    ul.appendChild(task);
    input.value = "";
    //li.querySelector('button').addEventListener('click', removeTask);
    //h1.textContent = document.querySelectorAll('li').length;
    h1.textContent = listLI.length;
}

form.addEventListener('submit', addTask);