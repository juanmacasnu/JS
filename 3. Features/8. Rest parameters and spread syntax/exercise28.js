function sum(...numbers) {
  return numbers.reduce((prev, accumulator) => prev + accumulator, 0);
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));