const Person = {
    name: 'Adam',
    ShowName() {
        console.log(`My name is ${this.name}`)
    },
    ShowFullName(surname) {
        console.log(`My name is ${this.name} and surname is ${this.surname ? this.surname : surname}`)
    }
}

const People = [
    { name: 'Monika', surname: 'Nowak' },
    { name: 'Włodek' }
]

// Person.ShowName();
// People.forEach(element => { Person.ShowFullName.apply(element, ['Kowalski']) })
People.forEach(element => { Person.ShowFullName.bind(element, ['Kowalski'])() })