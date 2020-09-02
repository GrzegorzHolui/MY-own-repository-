let resultArray = [];
function partsSums(ls) {
    //console.log(resultArray)
    //console.log(ls)
    // if (ls.length == 0) {
    //     resultArray.push(0);
    //     return resultArray;
    // } else {
    let ResultAmount = ls.reduce((total, amount) => total += amount);
    resultArray.push(ResultAmount);
    if (ls.length == 1) {
        ls.shift();
        resultArray.push(0);
        return resultArray;
    }
    ls.shift();
    return partsSums(ls);
    // }
}

//console.info(partsSums([0]))
console.info(partsSums([0, 1, 3, 6, 10]))
resultArray = [];
console.info(partsSums([1, 2, 3, 4, 5, 6]))
//https://www.codewars.com/kata/5ce399e0047a45001c853c2b/discuss