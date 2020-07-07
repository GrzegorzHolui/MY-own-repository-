const div = document.querySelector('div');

let isActive = false;
let insertDivX;
let insertDivY;

div.addEventListener("mousedown", ((e) => {
    div.style.backgroundColor = "grey";
    isActive = !isActive;
    insertDivX = e.offsetX;
    insertDivY = e.offsetY;
}))

div.addEventListener("mousemove", ((e) => {
    if (isActive) {
        let clientx = e.clientX;
        let clienty = e.clientY;
        div.style.left = `${clientx - insertDivX}px`
        div.style.top = `${clienty - insertDivY}px`
    }
}))

div.addEventListener("mouseup", (() => {
    div.style.backgroundColor = "black";
    isActive = !isActive;
}))