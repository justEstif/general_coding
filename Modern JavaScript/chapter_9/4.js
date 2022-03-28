// find method

// returns the first value that match the callback function
const scores = [10, 5, 0, 40, 60, 10, 20, 70];

let firstOver50 = scores.find((score) => {
  return score > 50;
});
console.log(firstOver50);
