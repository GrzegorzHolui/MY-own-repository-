function fn(n) {
    let counter = 0;
    return function () {
        if (++counter < 2) {
            n();
        } else {
            throw new Error("za dużo")
        }
    }
}
let func = fn(function () {
    console.log("Witaj")
});
