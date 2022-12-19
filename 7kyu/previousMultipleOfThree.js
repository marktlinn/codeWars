/*
Link:
https://www.codewars.com/kata/61123a6f2446320021db987d/train/javascript
Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.
Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.
  Examples
  1      => null
  25     => null
  36     => 36
  1244   => 12
\\\\pseudocode////
check the number:
  if less than 3 return null
  if 3 return 3;
convert to string and check length
  if length greater than 1
    check number % 3 === 0?
      if no continue looping through num, slicing from start to length-index and testing num % 3 === 0
        when found return current slice as a number
      else return null
*/

const prevMultOfThree = n => {
  if (n < 3) return null;
  if (n === 3) return n;
  const strNum = String(n);
  if (strNum.length >= 2 && strNum % 3 !== 0) {
    let index = 0;
    for (const elem of strNum) {
      const currNum = strNum.slice(0, strNum.length - index);
      if (currNum % 3 === 0) {
        return +currNum;
      }
      index++;
    }
  }
  return strNum % 3 === 0 ? +strNum : null;
};

console.log(prevMultOfThree(1));
console.log(prevMultOfThree(25));
console.log(prevMultOfThree(36));
console.log(prevMultOfThree(1244));
console.log(prevMultOfThree(952406));
