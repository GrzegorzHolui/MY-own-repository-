// // Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/
const GameSummary = {
    amountGame: 0,
    wins: 0,
    lose: 0,
    draw: 0,
}

const Game = {
    ChoicePlayer: null,
    ChoiceAi: null,
}

let allChoiceOfImg = [...document.querySelectorAll('.select img')];

function ChoosePlayer() {
    Game.ChoicePlayer = this.dataset.option;
    console.log(Game.ChoicePlayer);
    if (this.style.boxShadow == '') {
        allChoiceOfImg.forEach(element => {
            element.style.boxShadow = '';
        })
        this.style.boxShadow = '0 0 0 4px yellow';
    } else {
        this.style.boxShadow = '';
    }
}

function DrawByLotAI() {
    let which = Math.floor(Math.random() * allChoiceOfImg.length);
    console.log(allChoiceOfImg[which].dataset.option);
    return allChoiceOfImg[which].dataset.option;
}

function WhoWin(player, ai) {
    let winner = '';
    ++GameSummary.amountGame;
    document.querySelector('p.numbers').textContent = "liczba gier: " + GameSummary.amountGame;
    if (player == ai) {
        ++GameSummary.draw;
        winner = "remis";
        document.querySelector('p.draws').textContent = "remisów: " + GameSummary.draw;
    } else if ((player == "kamień" && ai == "nożyczki") || (player == "nożyczki" && ai == "papier") || (player == "papier" && ai == "kamień")) {
        ++GameSummary.wins;
        document.querySelector('p.wins').textContent = "wygranych: " + GameSummary.wins;
        winner = "Gracz";
    } else {
        ++GameSummary.lose;
        document.querySelector('p.losses').textContent = "przegranych: " + GameSummary.lose;
        winner = "Computer";
    }
    document.querySelector('[data-summary="your-choice"]').textContent = Game.ChoicePlayer;
    document.querySelector('[data-summary="ai-choice"]').textContent = Game.ChoiceAi;
    document.querySelector('[data-summary="who-win"]').textContent = winner;

}

function StartGame() {
    if (!Game.ChoicePlayer) return alert('Wyborco wybierz gracza')
    Game.ChoiceAi = DrawByLotAI();
    WhoWin(Game.ChoicePlayer, Game.ChoiceAi);

}
allChoiceOfImg.forEach(hand => {
    hand.addEventListener('click', ChoosePlayer);
})


document.querySelector('.start').addEventListener("click", StartGame);