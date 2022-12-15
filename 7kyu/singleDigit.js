/*
Link:
https://www.codewars.com/kata/5a7778790136a132a00000c1
Task:
The goal of this Kata is to reduce the passed integer to a single digit (if not already) by converting the number to binary, taking the sum of the binary digits, and if that sum is not a single digit then repeat the process.
  If the passed integer is already a single digit there is no need to reduce
  n will be an integer such that 0 < n < 10⁹
For example given 5665 the function should return 5:
  5665 --> (binary) 1011000100001
  1011000100001 --> (sum of binary digits) 5
Given 123456789 the function should return 1:
  123456789 --> (binary) 111010110111100110100010101
  111010110111100110100010101 --> (sum of binary digits) 16
  16 --> (binary) 10000
  10000 --> (sum of binary digits) 1
\\\\pseudocode////
Check if the number is less than 10, if so return the number.
otherwise, convert to number to string with radix of of 2 for binary.
split and reduce the binary code to a single number and return the singleDigit function recursively.
If the number passed is less than 10 it'll return th number, otherwise it'll loop through the binary again and further reduce the number until it is the right size.
*/

function singleDigit(n) {
  if (n < 10) return n;
  const binNum = n.toString(2);
  return singleDigit(binNum.split("").reduce((ttl, cur) => (ttl += +cur), 0));
}

console.log(singleDigit(999)); //, 8)
console.log(singleDigit(1234444123)); //, 1)
console.log(singleDigit(443566)); //, 2)
console.log(singleDigit(565656565)); //, 3)
console.log(singleDigit(4868872)); //, 8)
console.log(singleDigit(234234235)); //, 2)
