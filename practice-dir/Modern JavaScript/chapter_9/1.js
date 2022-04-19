// const scores = [10, 30, 15, 25, 50, 40, 5];

// // filter method: return an array with filtered out elements based on the conditions given
// let y = scores.filter((score) => {
//   return score > 20;
// });

const users = [
  { name: "shaun", premium: true },
  { name: "yoshi", premium: false },
  { name: "mario", premium: false },
  { name: "chun-li", premium: true },
];

let premiumUsers = users.filter((user) => {
  return user.premium;
});
console.log(premiumUsers);
