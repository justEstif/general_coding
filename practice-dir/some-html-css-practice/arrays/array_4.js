const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function (accumulator, number) {
  return accumulator + number;
  // accumulator starts from zero
}, 0); // initalValue
console.log(sum);
