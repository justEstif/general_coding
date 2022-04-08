/**

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.
If a value is present in b, all of its occurrences must be removed from the other:


 * Solving a Problem**
 * Understand and explain the problem to a duck
 * Plan
 * Pseudocode and research applicable functions
 * Divide and conquer

 the problem: 
 make a function
 there are two arrays
 both have numbers
 check if array a has any value that is in array b
 if it does remove those
 if not next

i need to go through each value of b, if there are matches of it in a, remove them and go to the next
  how to go through each value of b? forEach
  should I just use filter?  + includes
 */

function arrayDiff(a, b) {
  return a.filter((element) => !b.includes(element));
}
let a = [1, 2];
let b = [1];
console.log(arrayDiff(a, b));
