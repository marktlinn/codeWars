/*
Link:
https://www.codewars.com/kata/51b6249c4612257ac0000005/train/javascript
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.
Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.
Example:
solution('XXI'); // should return 21
\\\\pseudocode////
set out an object of romanNumerals: the keys to the decimal integer values
initialise a variable to hold a counter, init at 0
if the input value is of length 1 or less, just return that key value from the romanNumeral object
Otherwise:
  split the numerals into individual string elements
  run a loop over each element
    if the element at current index is less than the value of the element at the next index we have to conside the current value and next value together as one e.g. IV (4), as it is a special character in numerals.
      set current string value and next string value as one string and search the romanNumeral object, add the value to the counter and increase the index by one, so it skips the next value.
    else search romanNumerals objext for current index value, increment counter by that value.
return counter

*/

function solution(numerals) {
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

  let counter = 0;

  if (numerals.length <= 1) return romanNumerals[numerals];

  const splitNumerals = numerals.split("");

  for (let i = 0; i < splitNumerals.length; i++) {
    const currentNumeral = splitNumerals[i];
    const nextNumeral = splitNumerals[i + 1];

    if (romanNumerals[currentNumeral] < romanNumerals[nextNumeral]) {
      const oddNumeral = `${currentNumeral}${nextNumeral}`;
      counter += romanNumerals[oddNumeral];
      i++;
    } else {
      counter += romanNumerals[currentNumeral];
    }
  }
  return counter;
}

console.log(solution("MCCXCIV"));
