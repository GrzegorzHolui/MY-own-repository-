// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['Dzień Dobry', 'Fajnie że jesteś', 'Zaczynamy']

// Implementacja
let firstIndex = 0;
let secondIndex = 0;
let Enough = true;
const addLetter = () => {
    spnText.textContent += txt[firstIndex][secondIndex];
    secondIndex++;
    if (secondIndex === txt[firstIndex].length) {
        ++firstIndex;
        secondIndex = 0;
        Enough = false;
        setTimeout(() => {
            if (firstIndex == 3) {
                Enough = false;
            } else {
                spnText.textContent = '';
                Enough = true;
                addLetter();
            }
        }, 1000)
    }
    if (Enough) {
        setTimeout(() => {
            addLetter();
        }, 200)
    }
}
addLetter(); //pierwsze wywołanie
// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);