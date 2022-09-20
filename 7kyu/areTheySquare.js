/*
Link:
https://www.codewars.com/kata/56853c44b295170b73000007/train/javascript
Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.
Your function should return true if all elements in the array are square numbers and false if not.
An empty array should return undefined / None / nil /false (for C). You can assume that all array elements will be positive integers.
Examples:
isSquare([1, 4, 9, 16]) --> true
isSquare([3, 4, 7, 9]) --> false
isSquare([]) --> undefined
///Pseudocode/plan\\\
loop through the array
    if every element's sqrt === an int
        return true
    else return false
*/
const isSquare = function(arr){
    if(arr.length===0) return undefined
    return arr.every(num=> Number.isInteger(Math.sqrt(num)))
}

console.log(isSquare([ 1, 2, 3, 4, 5, 6 ]))