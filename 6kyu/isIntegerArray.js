/*
Link:
https://www.codewars.com/kata/52a112d9488f506ae7000b95
Write a function with the signature shown below:
function isIntArray(arr) {
  return true
}
returns true  / True if every element in an array is an integer or a float with no decimals.
returns true  / True if array is empty.
returns false / False for every other input.
\\\\\\Pseudocode/plan///////
If array is empty return true
if arr isn't an array return false
else check each element is an integer
*/

function isIntArray(arr) {
    if(arr === []) return true;
    return !Array.isArray(arr) ? false : arr.every(elem=> Number.isInteger(elem))
}

console.log(isIntArray([null]))

