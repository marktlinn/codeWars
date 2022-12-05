/*
Link:
https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/javascript
Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.
Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.
  Example:
  solution(1000); // should return 'M'
  Help:
  Symbol    Value
  I          1
  V          5
  X          10
  L          50
  C          100
  D          500
  M          1,000
Remember that there can't be more than 3 identical symbols in a row.
\\\\pseudocode////
Create an object consisting of keys (numerals) and their values (ints).
Create a counter var to track numerals as a string
Loop through the numerals
  while input num is greater than numeral value, subtract value from num and add numeral to counter
return counter
*/

function solution(num) {
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let counter = "";
  for (const property in romanNumerals) {
    while (num >= romanNumerals[property]) {
      counter += property;
      num -= romanNumerals[property];
    }
  }
  return counter;
}

console.log(solution(1095));
