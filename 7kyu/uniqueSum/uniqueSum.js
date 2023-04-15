/*
Link:
https://www.codewars.com/kata/56b1eb19247c01493a000065/train/javascript

Given a list of integers values, your job is to return the sum of the values; however, if the same integer value appears multiple times in the list, you can only count it once in your sum.
For example:
  [ 1, 2, 3] ==> 6
  [ 1, 3, 8, 1, 8] ==> 12
  [ -1, -1, 5, 2, -7] ==> -1
  [] ==> null
*/

/*
Pseudocode:
Init a result var as null.
Create a set from the array and then run a loop over the set to add all the values to result if they are numbers 
return result
*/

function uniqueSum(lst) {
  const uniqueNums = new Set(lst);
  let result = null;
  uniqueNums.forEach(val => (typeof val === "number" ? (result += val) : null));
  return result;
}

module.exports = uniqueSum;
