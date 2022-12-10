/*Link:
https://www.codewars.com/kata/55afed09237df73343000042
###Lucky number
Write a function to find if a number is lucky or not. If the sum of all digits is 0 or multiple of 9 then the number is lucky.
  1892376 => 1+8+9+2+3+7+6 = 36. 36 is divisible by 9, hence number is lucky.
Function will return true for lucky numbers and false for others.
\\\\pseudocode////
convert input num into a string and split it into elements. Reduce the elements into the sum.
if the sum is divisible by 9 return true, else false.
*/

function isLucky(n) {
  return String(n)
    .split("")
    .reduce((prev, curr) => +prev + +curr) %
    9 ===
    0
    ? true
    : false;
}
