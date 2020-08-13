const inputValue = document.querySelector('#value');
const inputKey = document.querySelector('#key');
const buttonEnter = document.querySelector('#enter');
let main = document.querySelector('ul');
const removeButton = document.querySelector('#remove');
const usun = document.getElementsByClassName('usun');
const addKeyandValue = () => {
    main.innerHTML = "";
    const value = inputValue.value;
    const key = inputKey.value;
    if (key && value) {
        localStorage.setItem(key, value);
    }
    for (let i = 0; i < localStorage.length; i++) {
        //const li = document.createElement('li');
        //li.className = 'task';                                          
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        main.innerHTML += `${key} : ${value} <button class="usun">Usun</button> <br />`
    }
    inputValue.value = "";
    inputKey.value = "";
}
const removefromCashthings = () => {
    localStorage.clear();
    main.innerHTML = "";
}

buttonEnter.addEventListener('click', addKeyandValue);
removeButton.addEventListener('click', removefromCashthings)
setTimeout(() => {
    addKeyandValue();
}, 1)