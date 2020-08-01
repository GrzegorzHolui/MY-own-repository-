let StartTime = () => {
    let time = 0;
    let changeTime = () => {
        time++;
        document.body.textContent = `Na stronie już jesteś ${time} sekund`;
    }
    return changeTime;
}
const StartAmount = StartTime();
setInterval(StartAmount, 1000);