/*
Link:
https://www.codewars.com/kata/5a430359e1ce0e35540000b1/train/javascript
Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.
    A few examples:
    ['u', 'y'] =>  ['u', 'y'] // average length is 1
    ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
    ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
If the average length is not an integer, use Math.round().
The input array's length > 1
\\\\pseudocode////
find the average length of each string and store in a var: aveLength
map over the original array, in every element take the [0] index and that element repeated a number of times equal to aveLength
*/

function averageLength(arr) { 
    const aveLength = Math.round(arr.reduce((prev,curr)=> prev+curr.length,0)/arr.length);
    return arr.map(item=> item[0].repeat(aveLength))
}

console.log(averageLength(['u', 'y']))
console.log(averageLength(['aa', 'bbb', 'cccc']))
console.log(averageLength(['aa', 'bb', 'ddd', 'eee']))