/*
Link:
https://www.codewars.com/kata/595aa94353e43a8746000120/train/javascript
An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.
Example:
The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the starting array, your function should return the int 0.
Note: N may be 1 or less (in the latter case, the first array will be []).
\\\\pseudocode////
create a var to store a the deletedNum, initialised at 0.
Compare the two arrays:
loop over first array, check each element
    if elem has an index of -1 in the mixed array, make deletedNum = elem
return deletedNum
*/

function findDeletedNumber(arr, mixArr) {
    let deletedNum = 0;
    arr.forEach(elem=> mixArr.indexOf(elem) === -1 ? deletedNum = elem : null)
    return deletedNum
}


console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]))
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]))
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]))