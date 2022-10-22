/*
Link:
https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/train/javascript
Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
For example:
([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
\\\\pseudocode/plan////
Create a var to hold an array of evenNums
set an index value for the last digit of the array.
while the length of evenNums is less than number
    loop through the digits from end to start
        if digit is even push it to evenNums
    decrement index by 1
reverse and return evenNums
*/

function evenNumbers(array, number) {
    const evenNums = [];
    let index = array.length-1;
    while (evenNums.length<number){
      if(array[index]%2===0){
        evenNums.push(array[index]);
      }
      index-=1;
    }
    return evenNums.reverse();
};