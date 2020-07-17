const btn = document.querySelector('button');
const section = document.querySelector('section');

const countChars = 10;
const countCodes = 100;

let chars = 'abcdefghijklmnoprstuwyxz0123456789';

let GenrateCode = () => {
    for (let i = 0; i < countCodes; i++) {
        let text = '';
        const div = document.createElement('div');
        for (let i = 0; i < countChars; i++) {
            let index = Math.floor(Math.random() * chars.length)
            text += chars[index];
        }
        div.textContent = text;
        section.appendChild(div);
    }
}

btn.addEventListener('click', GenrateCode)