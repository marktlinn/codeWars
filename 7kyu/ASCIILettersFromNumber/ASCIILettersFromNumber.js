/*
Link:
https://www.codewars.com/kata/589ebcb9926baae92e000001
Description:
You have to create a function that converts integer given as string into ASCII uppercase letters.
All ASCII characters have their numerical order in table.
For example,
from ASCII table, character of number 65 is "A".
Numbers will be next to each other, So you have to split given number to two digit long integers.
For example,
  '658776' to [65, 87, 76] and then turn it into 'AWL'.

\\\\pseudocode////
  Split the number argument into an array where each element consists of double digits
  Then loop over the array and return for each element the ASCII value for that number.
*/

function convert(number) {
  const numStr = String(number);
  let index = 0;
  const arrayToConvert = [];
  while (index < numStr.length) {
    arrayToConvert.push(numStr.slice(index, index + 2));
    index += 2;
  }
  if (arrayToConvert) {
    return arrayToConvert.map(elem => String.fromCharCode(elem)).join("");
  }
  return false;
}

console.log(convert("676584")); //,"CAT")

module.exports = convert;
