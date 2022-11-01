/*
Link:
https://www.codewars.com/kata/5641c3f809bf31f008000042/train/javascript
Each floating-point number should be formatted that only the first two decimal places are returned. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.
Don't round the numbers! Just cut them after two decimal places!
\\\\Pseudocode////
convert the number to a string, and split it at the decimal place
    then return as a number the first elem and a slice of the second elem to two places
*/

function twoDecimalPlaces(number) {
    const strNum = String(number).split('.');
    return Number(strNum[0] +'.' + strNum[1].slice(0,2))
}

console.log(twoDecimalPlaces(10.1289767789))
console.log(twoDecimalPlaces(-7488.83485834983))
console.log(twoDecimalPlaces(4.653725356))