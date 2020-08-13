const input = document.querySelector('input');
const ul = document.querySelector('ul');
let listItem = [...document.querySelectorAll('li')];
function findWord() {
    let value = input.value;
    listItem = listItem.filter(li => li.textContent.toLowerCase().includes(value));
    ul.textContent = "";
    listItem.forEach(li => ul.appendChild(li));
    
}


input.addEventListener('input', findWord);