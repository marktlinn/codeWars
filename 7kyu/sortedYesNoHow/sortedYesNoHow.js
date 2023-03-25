/*
Link:
https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript
Complete the method which accepts an array of integers, and returns one of the following:
    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.

\\\\pseudocode////
Create two aux function to check if every element is either sequentially descending or ascending, or otherwise unsorted, return the appropriate text accordingly.
*/

const ascendingCheck = arr => {
  return arr.every((elem, i) => i === 0 || elem >= arr[i - 1]);
};

const descendingCheck = arr => {
  return arr.every((elem, i) => i === arr.length - 1 || elem >= arr[i + 1]);
};

function isSortedAndHow(array) {
  if (ascendingCheck(array) === true) {
    return "yes, ascending";
  } else if (descendingCheck(array) === true) {
    return "yes, descending";
  } else return "no";
}

module.exports = isSortedAndHow;
