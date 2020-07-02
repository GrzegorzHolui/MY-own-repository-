const div1 = document.querySelector('#first');
const div2 = document.querySelector('#second');
let condition = true;
window.addEventListener("click", function () {
    if (condition) {
        div1.style.width = 50 + "vw";
        div2.style.width = 50 + "vw";
        condition = !condition;
    } else {
        div1.style.width = 10 + "px";
        div2.style.width = 10 + "px";
        condition = !condition;
    }

})