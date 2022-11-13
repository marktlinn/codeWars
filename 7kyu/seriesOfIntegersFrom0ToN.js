/*
Link:
https://www.codewars.com/kata/5841f4fb673ea2a2ae000111/train/javascript
Write a function generateIntegers/generate_integers that accepts a single argument n/$n and generates an array containing the integers from 0 to n/$n inclusive.
For example, generateIntegers(3)/generate_integers(3) should return [0, 1, 2, 3].
n/$n can be any integer greater than or equal to 0.
\\\\pseudocode////
Run a simple for loop iterate from 0 to n, pushing each iteration integer to an array.
return the array
*/

function generateIntegers(n) {
    const result = [];
    for(let i = 0; i<=n; i++){
        result.push(i)
    }
    return result;
}

console.log(generateIntegers(3))