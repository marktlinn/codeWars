/*
Link:
https://www.codewars.com/kata/58f6000bc0ec6451960000fd/train/javascript
Given an array, return the reversed version of the array (a different kind of reverse though), you reverse portions of the array, you'll be given a length argument which represents the length of each portion you are to reverse.
E.g
  selReverse([1,2,3,4,5,6], 2)
  //=> [2,1, 4,3, 6,5]
if after reversing some portions of the array and the length of the remaining portion in the array is not up to the length argument, just reverse them.
  selReverse([2,4,6,8,10,12,14,16], 3)
  //=> [6,4,2, 12,10,8, 16,14]
selReverse(array, length)
    array - array to reverse
    length - length of each portion to reverse
Note : if the length argument exceeds the array length, reverse all of them, if the length argument is zero do not reverse at all.

\\\\pseudocode////
if length > length of array return the whole array reversed
else if length is 0 just return the array as is
else declare an empty array: returnArr. 
  Start a loop through the array argument
    while length of array is greater than length splice the array from 0 - length, reverse and push to returnArr
    push what's left of arr reverse to returnArr
  return returnArr.
*/

function selReverse(array, length) {
  if (array.length < length) {
    return array.reverse();
  } else if (length === 0) {
    return array;
  }

  const returnArr = [];
  while (array.length > length) {
    returnArr.push(...array.splice(0, length).reverse());
  }
  returnArr.push(...array.reverse());
  return returnArr;
}

console.log(selReverse([2, 4, 6, 8, 10, 12, 14, 16], 3)); // [6,4,2,12,10,8,16,14]);
console.log(selReverse([1, 2, 3, 4, 5, 6], 2)); // [2,1,4,3,6,5]);
console.log(selReverse([1, 2, 3, 4, 5, 6], 0)); // [1,2,3,4,5,6]);
console.log(selReverse([1, 2, 3, 4, 5, 6], 1)); // [1,2,3,4,5,6]);
console.log(selReverse([1, 2, 3, 4, 5, 6], 10)); // [6,5,4,3,2,1]);
