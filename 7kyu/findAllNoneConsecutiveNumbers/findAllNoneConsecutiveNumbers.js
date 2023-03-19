/*
A number is non consecutive if it is not exactly one larger than the previous element in the array. The first element gets a pass and is never considered non consecutive.
Create a function named allNonConsecutive
  E.g., if we have an array [1,2,3,4,6,7,8,15,16] then 6 and 15 are non-consecutive.
You should return the results as an array of objects with two values i: <the index of the non-consecutive number> and n: <the non-consecutive number>.
  E.g., for the above array the result should be:
  [
    {i: 4, n:6},
    {i: 7, n:16}
  ]
If the whole array is consecutive or has one element then return an empty array.
The array elements will all be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive and/or negetive and the gap could be larger than one.

\\\\pseudocode////
declare and initialise an empty array
loop over the given array and determine if each element is the consecutive increment of the previous
  if not, push a new object of property value pairs to the array: 
    the i: theNewNonConsecutiveNumberIndex && n: theNewNonConsecutiveNumber
return the array
*/

function allNonConsecutive(arr) {
  const result = [];
  arr.forEach((elem, i) => {
    if (i > 0 && elem !== arr[i - 1] + 1) {
      result.push({ i: i, n: elem });
    }
  });
  return result;
}
module.exports = allNonConsecutive;
