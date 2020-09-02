// function Shape(Lengths) {
//     this.name = "";
//     this.Lengths = Lengths;
// }
// Shape.prototype.getArea = function () {
//     return this.Lengths[0] * this.Lengths[1];
// }
// Shape.prototype.getPerimeter = function () {
//     return this.Lengths.reduce((total, current) => { return total += current })
// }
// function Square() {
//     Shape.call(this, [20, 20])
//     this.name = "Square";
// }
// // let shape1 = new Shape([10, 10])
// // console.log(shape1.getPerimeter());

// let square = new Square();
// console.log(square.getArea())
class Shape {
    constructor() {
        this.name = "";
        //this.measurments = measurments;
    }
    GetArea() {
        // return this.measurments[0] + this.measurments[1];
        return this.name;
    }
}
// let shape1 = new Shape([20, 20])
// console.log(shape1.GetArea());

class Square extends Shape {
    constructor() {
        //super(measurments);
        this.name = "Square";
    }
}
let square = new Square([20, 20])
console.log(square.GetArea());