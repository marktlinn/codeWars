/*
Link:
https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/javascript
Task
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
Notes:
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
Input >> Output Examples
minValue ({1, 3, 1})  ==> return (13)
\\\\\Pseudocode/plan/////
Sort all values in ascending order
Pass the sorted values into a new set to remove duplicates
Make an array form the values of the set and loop over them combining them into a single string
return the strings value as a number
*/

function minValue(values){
    const orderedValues = new Set(values.sort((a,b)=> a-b))
    return +Array.from(orderedValues.values()).reduce((ttl, curr)=> ttl + curr, '')
}

console.log(minValue([1, 3, 1]))