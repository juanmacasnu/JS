function sum(...others) {
    return others.reduce((prev, accumulator) => prev + accumulator, 0);
}

console.log(sum(1, 2, 3, 4, 5));