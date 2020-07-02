const btn = document.querySelector('button');
const lists = document.querySelectorAll('ul > li');
let biggerSize = 5;
let isItNowBlock = false;
btn.addEventListener("click", function () {
    ///////////////////// 1 ///////////////////
    biggerSize += 5;
    for (let i = 0; i < lists.length; i++) {
        if(!isItNowBlock){
        lists[i].style.display = "block";
        }
        lists[i].style.fontSize = `${biggerSize}px`;
    }
    ////////////////////  2 ///////////////////
    // biggerSize += 5;
    // lists.forEach(function (list) {
    //     list.style.display = "block";
    //     list.style.fontSize = biggerSize + "px";
})