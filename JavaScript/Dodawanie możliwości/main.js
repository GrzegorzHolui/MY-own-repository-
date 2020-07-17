let prospections = [];
const h1 = document.querySelector('h1');
document.querySelector('input').select();
let addOption = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const inputValue = input.value
    if (inputValue.length) {
        for (prospection of prospections) {
            if (prospection == inputValue) {
                alert("Już to jest w bazie danych XD\nNie ma żadnej bazy jest tablica XD ");
                input.value = '';
                return
            }
        }
        prospections.push(inputValue);
        alert("Dodano");
        console.log(prospections);
        input.value = '';
    }
}
let cleanAllProspection = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const inputValue = input.value
    prospections = [];
    alert("Masz 0 możliwości");
    console.log(prospections);
    input.value = '';
}
let ShowProspection = (e) => {
    e.preventDefault();
    let amount = Math.floor(Math.random() * prospections.length);
    alert(prospections[amount]);
}
let ShowAllProspection = () => {
    for (prospection of prospections) {
        h1.textContent += `${prospection} `;
    }
}
document.querySelector('.add').addEventListener("click", addOption)
document.querySelector('.clean').addEventListener("click", cleanAllProspection)
document.querySelector('.showAdvice').addEventListener("click", ShowProspection)
document.querySelector('.showOptions').addEventListener("click", ShowAllProspection)