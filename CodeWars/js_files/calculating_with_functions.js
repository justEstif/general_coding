const plus = (number) => `+${number}`;
const minus = (number) => `-${number}`;
const times = (number) => `*${number}`;
const dividedBy = (number) => `/${number}`;
function zero(func) {
  let number = 0;
  return func ? Math.floor(eval(`${number}${func}`)) : number;
}
function one(func) {
  let number = 1;
  return func ? Math.floor(eval(`${number}${func}`)) : number;
}
function two(func) {
  let number = 2;
  return func ? Math.floor(eval(`${number}${func}`)) : number;
}
function three(func) {
  let number = 3;
  return func ? Math.floor(eval(`${number}${func}`)) : number;
}
function four(func) {
  let number = 4;
  return func ? Math.floor(eval(`${number}${func}`)) : number;
}
function five(func) {
  let number = 5;
  return func ? Math.floor(eval(`${number}${func}`)) : number;
}
function six(func) {
  let number = 6;
  return func ? Math.floor(eval(`${number}${func}`)) : number;
}
function seven(func) {
  let number = 7;
  return func ? Math.floor(eval(`${number}${func}`)) : number;
}
function eight(func) {
  let number = 8;
  return func ? Math.floor(eval(`${number}${func}`)) : number;
}
function nine(func) {
  let number = 9;
  return func ? Math.floor(eval(`${number}${func}`)) : number;
}

console.log(eight(dividedBy(three())));
console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));
