class Draw {
    constructor() {
        this.options = ['red', 'green', 'blue']
        let _result = this.drawResult();
        this.getResult = () => { return _result }
    }
    drawResult() {
        let colors = [];
        for (let i = 0; i < this.options.length; i++) {
            const color = Math.floor(Math.random() * 3);
            // console.log(color)
            colors.push(this.options[color]);
        }
        return colors;
    }
}
let draw = new Draw();
