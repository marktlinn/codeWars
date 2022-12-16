/*
Link:
https://www.codewars.com/kata/599c20626bd8795ce900001d/train/javascript
Write a function that takes a string which has integers inside it separated by spaces, and your task is to convert each integer in the string into an integer and return their sum.
Example
  summy("1 2 3")  ==> 6
\\\\pseudocode///
split the string to remove spaces and form an array of numbers, reduce the array converting each digit to a number in the process.
*/

function summy(stringOfInts) {
  return stringOfInts.split(" ").reduce((ttl, cur) => (ttl += +cur), 0);
}
