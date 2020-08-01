
const spanD = document.querySelector('span.d');
const spanH = document.querySelector('span.h');
const spanM = document.querySelector('span.m');
const spanS = document.querySelector('span.s');

let time = () => {
    const StartTime = new Date().getTime();
    const EndTime = new Date('2020-12-24 16:00:00');
    let days = Math.floor(EndTime / (1000 * 60 * 60 * 24) - StartTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((EndTime / (1000 * 60 * 60) - StartTime / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((EndTime / (1000 * 60) - StartTime / (1000 * 60)) % 60);
    let seconds = Math.floor((EndTime / 1000 - StartTime / 1000) % 60);
    //console.log(seconds);
    spanD.textContent = days + " dni ";
    spanH.textContent = hours + " godzin ";
    spanM.textContent = minutes + " minut ";
    spanS.textContent = seconds + " sekund";
}


setInterval(time, 1000);