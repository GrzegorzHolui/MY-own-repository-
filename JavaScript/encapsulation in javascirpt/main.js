class Car {
    constructor(type) {
        this.counter = 100;
        this.type = type;
        this.GetCounter = function () {
            return counter;
        }
    }
}
// console.log(Car.GetCounter)
const polo = new Car('polo');
// console.log(polo.GetCounter());
console.log(polo.counter)