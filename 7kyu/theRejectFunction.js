/*
Link:
https://www.codewars.com/kata/52988f3f7edba9839c00037d/train/javascript
Output
Implement a function which filters out array values which satisfy the given predicate.
reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)  =>  [1, 3, 5]
\\\\Pseudocode/plan////
if array elem doesn't match the output of the predicate function return it
*/

function reject(array, predicate) {
    return array.filter(item=> !predicate(item))
}