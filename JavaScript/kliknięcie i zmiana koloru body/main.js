document.body.addEventListener("click", function (event) {
    let x = event.clientX;
    let y = event.clientY;
    if (x && y % 2 == 0) {
        document.body.style.backgroundColor = "red";
    } else if (x && y % 3 == 0) {
        document.body.style.backgroundColor = "blue";
    } else {
        document.body.style.backgroundColor = "green";
    }
})