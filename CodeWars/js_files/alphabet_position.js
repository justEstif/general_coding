/**
 * Welcome.
 * In this kata you are required to, given a string, replace every letter with its position in the alphabet.
 * If anything in the text isn't a letter, ignore it and don't return it.
 * Solving a Problem**
 * Understand and explain the problem to a duck
 * Plan
 * Pseudocode and research applicable functions
 * Divide and conquer
 * 
 * the problem:
 make a function 
 return position in alphabet - make uppercase?
then loop through string and check the value, add to string 
return new string
 plan
 if not letter - ignore - to Uppercase then if returned not in range [101, 132] ignore

pseudocode

function (someString){
  initialize an empty string
  someString = someString to uppercase
  for(let i = 0; i < someString.length;i++){
  (someSrting.charCodeAt(i))
    if(someString.charCodeAr(i))
  }
}

other idea, split string to array
then filter the alphabets
find charcode

 */

function alphabetPosition(someString) {
  let arr = someString
    .toLowerCase()
    .split("")
    .filter((element) => /[a-zA-Z]/.test(element))
    .map((element) => element.charCodeAt(0))
    .join(" ");
  return arr;
}
alphabetPosition("this is a string 1ithi");
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
