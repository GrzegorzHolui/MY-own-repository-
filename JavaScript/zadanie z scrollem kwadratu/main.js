const div = document.createElement('div');
document.body.appendChild(div);
let size = 100;
div.style.width = size + "px";
div.style.height = size + "px";

let necesseryCondition = true;
window.addEventListener("scroll", function () {
    if (window.innerWidth / 2 <= size) {
        necesseryCondition = !necesseryCondition;
    } else if (size <= 0) {
        necesseryCondition = !necesseryCondition;
    }
    if (necesseryCondition == true) {
        size += 5;
        div.style.width = size + "px";
        div.style.height = size + "px";
    } else {
        size -= 5;
        div.style.width = size + "px";
        div.style.height = size + "px";
    }
})