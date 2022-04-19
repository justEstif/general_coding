// sort: changes the original array

// example 1: sorting strings

// const names = ["mario", "shaun", "chun-li", "yoshi", "luigi"];
// // example 2: sorting numbers

const scores = [10, 5, 20, 5, 35, 70, 45];
scores.sort((a, b) => {
  return b - a;
});
console.log(scores);

const players = [
  { player: "mario", score: 20 },
  { player: "luigi", score: 10 },
  { player: "chun-li", score: 50 },
  { player: "yoshi", score: 30 },
  { player: "shaun", score: 70 },
];

players.sort((a, b) => {
  if (a.score > b.score) {
    return -1;
  } else if (b.score > a.score) {
    return 1;
  } else {
    return 0;
  }
});

players.sort((a, b) => {
  return b.score - a.score;
});

console.log(players);
