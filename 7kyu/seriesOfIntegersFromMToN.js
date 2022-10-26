/*
Link:
https://www.codewars.com/kata/5841f680c5c9b092950001ae/train/javascript
Write a function that accepts two arguments and generates a sequence containing the integers from the first argument to the second inclusive.
Input
Pair of integers greater than or equal to 0. The second argument will always be greater than or equal to the first. 
\\\\pseudocode/plan////
create a var to hold an empty array.
use a for loop to go through the digits from m to n pushing each digit to the var array
return the var array
*/

function generateIntegers(m, n) {
    const seq = [];
    for(let i = m; i<=n; i++){
      seq.push(i)
    }
    return seq
}