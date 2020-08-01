const myArray = [1, 2, 3, 4, 5];
// const getFour = myArray.find(element => element % 4 == 0);
// console.log(getFour);

const newARRAY = myArray.map((element, i) => {
    return element * i;
});
console.log(newARRAY);
