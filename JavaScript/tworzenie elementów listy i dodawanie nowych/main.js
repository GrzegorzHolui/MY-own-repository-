let size = 10;
let orderElement = 1;
let font = 1;
const init = () => {
    const btn = document.createElement('button');
    btn.textContent = 'Dodaj kolejne 10 elemtów';
    document.body.appendChild(btn);
    const ul = document.createElement('ul');
    document.body.appendChild(ul);
    btn.addEventListener("click", createLiElements);
}

const createLiElements = () => {
    const ul = document.querySelector('ul');
    for (let i = 0; i < size; i++) {
        const li = document.createElement('li');
        li.textContent = `element nr ${orderElement}`;
        ul.appendChild(li);
        li.style.fontSize = font + "px";
        font++;
        orderElement++;
    }
}
init();
