/*
Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.
Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.
min([1,2,3,4,5], 'value') // => 1
min([1,2,3,4,5], 'index') // => 0 
\\\\\\\Pseudocode/plan////////
create two vars: index, and minimum
minimum = the lowest number in the array => use Math.min
index = indexOf minimum
    if toReturn == 'index' return index, 
    else minimum.
*/

function min(arr, toReturn) {
    const minimum = Math.min(...arr);
    const index = arr.indexOf(minimum)
    return toReturn === 'index' ? index : minimum;
} 

const nums =[2,1,3,4,5];

console.log(min(nums))