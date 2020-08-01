// http://websamuraj.pl/examples/js/projekt11/
const btnStart = document.querySelector('.main')
const Reset = document.querySelector('.reset');
const div = document.querySelector('div.time div');
let Seconds = 0;
function StartCountDown() {
    if (btnStart.textContent = "Pauza") {
        Seconds += 0.01;
        div.textContent = Seconds.toFixed(2);
    }
    else if (btnStart.textContent = "Start") {
        div.textContent = Seconds.toFixed(2);
    }
}
let Start;
btnStart.addEventListener('click', () => {
    if (btnStart.textContent == "Start") {
        btnStart.textContent = "Pauza";
        Start = setInterval(StartCountDown, 10)
    } else {
        btnStart.textContent = "Start";
        clearInterval(Start);
    }
});
Reset.addEventListener('click', () => {
    clearInterval(Start);
    Seconds = 0;
    btnStart.textContent = "Start";
    div.textContent = "---";
})