console.log(1);
console.log(2);
// emulates a network request
// it doesn't block the code
// the function after will run and not wait
setTimeout(() => {
  console.log("callback function fired");
}, 2000);
console.log(3);
console.log(4);
