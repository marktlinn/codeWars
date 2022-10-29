/*
Link:
https://www.codewars.com/kata/586e4c61aa0428f04e000069/train/javascript
Write a function that returns only the decimal part of the given number.
You only have to handle valid numbers, not Infinity, NaN, or similar. Always return a positive decimal part.
Examples
getDecimal(2.4)  === 0.4
getDecimal(-0.2) === 0.2
\\\\pseudocode/plan////
Convert n to a string and split at '.'
    if there is a first element
        take the first element from the split and return it preceeded by 0.
        else return 0
*/

function getDecimal(n){
    const decimal = String(n).split('.')[1];
    return decimal ? Number(0 + '.'+ decimal) : 0
}

console.log(getDecimal(4.5)) // 0.5
console.log(getDecimal(-1.2)) // 0.2
console.log(getDecimal(10)) // 0