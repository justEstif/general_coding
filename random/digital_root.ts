/**
* Digital root is the recursive sum of all the digits in a number.

* Given n, take the sum of the digits of n. 
* If that value has more than one digit, continue reducing in this way until a single-digit number is produced. 
* The input will be a non-negative integer.


 * Solving a Problem
 * Understand and explain the problem to a duck
 * Plan
 * Pseudocode and research applicable functions
 * Divide and conquer

 * Problem:
 * 1. you are given a non-negative integer
 * - it might or might not be single digit
 * 2. go through each digit and find the sum

 * I think the way to solve this is probably using array.prototype.reduce
*/
function digitalRoot(myInt: number): number | void {
  let intArr: number[] = Array.from(String(myInt), (num) => Number(num));
  const sum = intArr.reduce((a, b) => a + b, 0);
  if (sum.toString().length === 1) return sum;
  digitalRoot(sum);
}

digitalRoot(10);
