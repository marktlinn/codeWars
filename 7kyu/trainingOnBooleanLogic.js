/*
Link:
https://www.codewars.com/kata/584d2c19766c2b2f6a00004f/train/javascript
You need to implement two functions, xor and or, that replicate the behaviour of their respective operators:
    xor = Takes 2 values and returns true if, and only if, one of them is truthy.
    or = Takes 2 values and returns true if either one of them is truthy.
When doing so, you cannot use the or operator: ||.
Input
    Not all input will be booleans - there will be truthy and falsey values [the latter including also empty strings and empty arrays]
    There will always be 2 values provided
Examples
    xor(true, true) should return false
    xor(false, true) should return true
    or(true, false) should return true
    or(false, false) should return false

\\\\pseudocode////
use if statements to achieve the same logic as "||"
*/

const or = (a, b) => {
  if (a) return true;
  if (b) return true;
  return false;
};

const xor = (a, b) => {
  if (a && !b) return true;
  if (b && !a) return true;
  return false;
};

console.log(or(true, true)); //, true || true);
console.log(or(true, false)); //, true || false);
console.log(or(false, true)); //, false || true);
console.log(or(false, false)); //, false || false);
