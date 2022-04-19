// timestamps
const before = new Date("February 1 2019 7:30:59");
const now = new Date();

console.log(now.getTime());
console.log(before.getTime());
console.log(before.toDateString());

const diff = now.getTime() - before.getTime();

console.log(diff);
// we cn convert the difference to mins
const mins = Math.round(diff / 1000 / 60);
const hours = mins / 60;
const days = hours / 24;

console.log(mins, "Mins");
console.log(hours, "hours");

// convert timestamp to date objects
