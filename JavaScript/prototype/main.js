// Array.prototype.delete = function (index){
//     return this.splice(index,1);
// }
// const Person = function (country, citzenship) {
//     this.country = country;
//     this.citzenship = citzenship;
//     this.namesOfChildren = [];
// }
// Person.prototype.addChildren = function (nameChild) {
//     this.namesOfChildren.push(nameChild);
// }
// const Zenek = new Person('polskie', 'polak');

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    sound() {
        console.log(`I'm ${this.name}`);
    }
}

class Human extends Animal {
    constructor(name, species, occupation, citizen) {
        super(name, species);
        this.occupation = occupation;
        this.citizen = citizen;
    }
}

const dog = new Animal('fafik', 'dog');
const Maria = new Human('Maria', 'Human', 'Cooker', 'Polish');