// 1 sumowanie za pomocą reduce
// let tab = [1, 2, 3, 4, 5];
// let result = tab.reduce((total, amount) => {
//     total += amount;
//     return total;
// }, 0)
// console.log(result);

// 2 średnia wartość
// let tab = [1, 2, 3, 4, 5]
// let result = tab.reduce((total, amount, index, array) => {
//     total += amount;
//     if (index === array.length - 1) return total / array.length;
//     return total
// })
// console.log(result) 

//3 zwrócenie tablicy bez powtarzania liczb
// let tab = [1, 2, 3, 4, 5]
// let result = tab.reduce((total, current) => {
//     if (total.indexOf(current) === -1) total.push(current)
//     console.log(total);       
//     return total;
// }, [])

//4 zwracanie jednej tablicy z dwóch
// let tab = [[1, 2, 3], [4, 5, 6]];
// let result = tab.reduce((array, current) => array.concat(current),[])
// console.log(result);
let tab = ['123456789']
console.log(tab[0].split(''));