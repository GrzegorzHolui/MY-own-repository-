const input = document.querySelector('input');
const form = document.querySelector('form');
let tasks = [...document.querySelectorAll('li')];
const ul = document.querySelector('ul');
const findWords = () => {
    let search = input.value;
    //let tasks = [...list];
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(search));
    ul.textContent = "";
    tasks.forEach(li => ul.appendChild(li));
}

// const addTask = () => {
//     event.preventDefault();
//     const task = input.value;
//     const li = document.createElement('li');
//     li.textContent = task;
//     ul.appendChild(li);
// }

input.addEventListener('input', findWords);
//form.addEventListener('submit', addTask);