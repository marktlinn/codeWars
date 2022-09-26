/*
Link:
https://www.codewars.com/kata/58aed2cafab8faca1d000e20/train/javascript
You are provided with an array of positive integers and an additional integer n (n > 1).
Calculate the sum of each value in the array to the nth power. Then subtract the sum of the original array.
Examples
{1, 2, 3}, 3  -->  (1^3 + 2^3 + 3^3 ) - (1 + 2 + 3)  -->  36 - 6  -->  30
{1, 2}, 5     -->  (1^5 + 2^5) - (1 + 2)             -->  33 - 3  -->  30
\\\\pseudocode/plan////
sum original array and store result in a sum var
loop of the arr, times each element to the power of n
return the value minus the sum var
*/

function modifiedSum(a, n) {
    const sum = a.reduce((ttl,curr)=> ttl+curr);
    return a.reduce((ttl,curr)=> ttl+curr**n, 0) - sum;
}

console.log(modifiedSum([1, 2, 3], 3))