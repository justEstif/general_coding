/**

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
You function receives one side of the DNA (string); you need to return the other complementary side. 
DNA strand is never empty or there is no DNA at all.


 * Solving a Problem**
 * Understand and explain the problem to a duck
 * Plan
 * Pseudocode and research applicable functions
 * Divide and conquer


- I get a string of DNA
- I return match
    - A -> T
    - C -> G
- break string into array
    - use array destructuring
const [A, T, C, G] = ['T', 'A', 'C', 'G']


get string input
break up string into array

*/

function DNAStrand(dna) {
  const match = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  return dna
    .split("")
    .map((x) => match[x])
    .join("");
}
console.log(DNAStrand("ATTGC"));
