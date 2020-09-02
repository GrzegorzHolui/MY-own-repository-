// for in chodzi po kluczach, indexach a for of po value
// Generalnie for in jest do obiektów a for of nie o
const employee = {
    boss: "krzysztof",
    secretary: "Ewa"
}
const descriptor = Object.getOwnPropertyDescriptor(employee, 'boss');
Object.defineProperty(employee, 'accountant', { value: 'Marek', enumerable: true })

Object.prototype.testXd = 'TEST XD';
    
for (const key in employee) {
    if (employee.hasOwnProperty(key)) {
        console.log(key)
        console.log(employee[key])
    }
}