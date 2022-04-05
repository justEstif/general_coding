/**
 * Create a function named divisors/Divisors that takes an integer n > 1
 * and returns an array with all of the integer's divisors(except for 1 and the number itself),
 * from smallest to largest.
 * If the number is prime return the string '(integer) is prime'
 */

/**
 * Solving a Problem**
 * Understand and explain the problem to a duck
 * Plan
 * Pseudocode and research applicable functions
 * Divide and conquer
 */

/**
 * the problem is to find the array with all of the integer's divisors
 * we have to divide the given integer by all numbers below it except 1 and itself
 * if the number is divisle push to the array else not
 * if no divisors return is prime
 * notes: the divisors are always less that the number

 * instantiate an array
 * we have to use a for loop and divide, not negative because we don't want long code
 * if it is divisible push to the array
 * if array is empty return `${integer} is prime` else the array from smallest to largest
  */

function divisors(number) {
  let arr = [];
  for (let i = 2; i < number; i++) if (number % i === 0) arr.push(i);
  if (arr.length === 0) return `${number} is prime`;
  return arr;
}
