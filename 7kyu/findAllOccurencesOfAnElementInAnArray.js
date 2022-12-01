/*
Link:
https://www.codewars.com/kata/59a9919107157a45220000e1/train/javascript
Given an array (a list in Python) of integers and an integer n, find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.
If n is not in the given array, return an empty array [].
Assume that n and all values in the given array will always be integers.
  Example:
  findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]
\\\\pseudocode////
create an empty array to store the indeces
loop over the array given match each element equal to n and push the index of that number to the indeces array
*/

const findAll = (array, n) => {
  const indeces = [];
  array.forEach((elem, i) => (elem === n ? indeces.push(i) : null));
  return indeces;
};

console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3));
console.log(findAll([10, 16, 20, 6, 14, 11, 20, 2, 17, 16, 14], 16));
console.log(
  findAll(
    [
      20, 20, 10, 13, 15, 2, 7, 2, 20, 3, 18, 2, 3, 2, 16, 10, 9, 9, 7, 5, 15,
      5,
    ],
    20
  )
);
