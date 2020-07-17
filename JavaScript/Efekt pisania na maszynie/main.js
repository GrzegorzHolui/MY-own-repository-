const spnText = document.querySelector('span.text');
const spnCursor = document.querySelector('span.cursor');
const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolores quam quisquam aliquam obcaecati rerum et magnam harum, culpa esse ratione architecto, quia nesciunt pariatur nam fugiat quibusdam eveniet libero?'
let indexText = 0;
let Start_Write = () => {
    spnText.textContent += text[indexText];
    indexText++;
    if (indexText == text.length) clearInterval(Start);
}
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}

let Start = setInterval(Start_Write, 20);
setInterval(cursorAnimation,400)
