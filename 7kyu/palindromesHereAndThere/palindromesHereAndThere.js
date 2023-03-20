/*
Link:
https://www.codewars.com/kata/5838a66eaed8c259df000003/train/javascript
An array is given with palindromic and non-palindromic numbers. A palindromic number is a number that is the same from a reversed order. For example 122 is not a palindromic number, but 202 is one.
Your task is to write a function that returns an array with only 1s and 0s, where all palindromic numbers are replaced with a 1 and all non-palindromic numbers are replaced with a 0.
For example:
  [101, 2, 85, 33, 14014]  ==>  [1, 1, 0, 1, 0]
  [45, 21, 303, 56]        ==>  [0, 0, 1, 0]

\\\\pseudocode////
loop over the array, copy and convert the current elem to a string, reverse and join it, then compare it to the current elem as a string
  if they are equal return 1 for that elem
  else return 0
return the looped result
*/

function convertPalindromes(numbers) {
  return numbers.map(elem =>
    String(elem).split("").reverse().join("") === elem.toString() ? 1 : 0
  );
}

module.exports = convertPalindromes;
