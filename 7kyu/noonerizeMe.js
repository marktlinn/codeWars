/*
Link:
https://www.codewars.com/kata/56dbed3a13c2f61ae3000bcd/train/javascript
You will create a function which takes an array of two positive integers, spoonerizes them, and returns the positive difference between them as a single number or 0 if the numbers are equal:
[123, 456] = 423 - 156 = 267
Your code must test that all array items are numbers and return "invalid array" if it finds that either item is not a number. The provided array will always contain 2 elements.
When the inputs are valid, they will always be integers, no floats will be passed. However, you must take into account that the numbers will be of varying magnitude, between and within test cases.
\\\\\pseudocode/plan/////
As the array will be a max of two elements long, we'll loop through the array to check each item is a number
    if so
        declare vars to hold the elem1 and elm2 of the array as strings
        then using slice create two more vars from position zero of elem plus the sliced second position of the other elem
        ***this saves us from mutating data***
        finally return the max number - the min number
    else if one elem is not a number immediately return invalid array

*/


function noonerize(numbers) {
    if(numbers.every(elem=> typeof elem == 'number')){
    const stringNum1 = String(numbers[0]);
    const stringNum2 = String(numbers[1]);
    const num1 = Number(stringNum1[0] + stringNum2.slice(1));
    const num2 = Number(stringNum2[0] + stringNum1.slice(1));
    return Math.max(num1, num2) - Math.min(num1, num2)
    }
    return 'invalid array'
}

console.log(noonerize([12, 34]))