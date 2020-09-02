class Statistics {
    constructor() {
        this.GameResults = [{ win: true, bid: 2 }, { win: false, bid: 10 }];
    }

    addGameToStatistcs(win, bid) {
        let gameResult = {
            win: win,
            bid, bid
        }
        console.log(gameResult)
        this.GameResults.push(gameResult)
    }
    ShowStatistics() {
        let gamesLength = this.GameResults.length;
        let gamesWins = this.GameResults.filter(win => win == true);
        let gameslosses = this.GameResults.filter(lose => lose == false)
        return [gamesLength, gamesWins, gameslosses];
    }
}