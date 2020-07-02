const div = document.querySelector('div');
document.body.appendChild(div);
let size = 10;
div.style.width = 100 + "vw";
div.style.height = size + "px";
let grow = true;
window.addEventListener("scroll", function () {
    if (size >= window.innerHeight / 2) {
        console.log(window.innerHeight)
        grow = !grow;
    } else if (size <= 0) {
        grow = !grow;
    }
    if (grow == true) {
        size += 5;
        div.style.height = size + "px";
    } else {
        size -= 5;
        div.style.height = size + "px";
    }
})