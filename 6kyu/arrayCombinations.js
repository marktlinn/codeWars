/*
Link:
https://www.codewars.com/kata/59e66e48fc3c499ec5000103
In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.
For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].
Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.
See test cases for more examples.
If you like this Kata, please try:
\\\\pseudocode/plan////
loop over the big array and for each sub array create a set to remove any duplicates, in the process turn that set into an array
    finally reduce the lengths of the newly formed arrays and times them together to get the possible combinations
return the product of that reduction.
*/

function solve(arr) {
    const processedArr = arr.map(elem=> Array.from(new Set(elem)))
    return processedArr.reduce((ttl,curr)=>ttl*curr.length,1)
};

console.log(solve([[1,2],[4],[5,6]]))
console.log(solve([[1,2],[4,4],[5,6,6]]))
console.log(solve([[1,2],[3,4],[5,6]]))