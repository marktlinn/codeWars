/*
Link: 
https://www.codewars.com/kata/59859f435f5d18ede7000050/train/javascript
Write a function that takes a string and returns an array containing binary numbers equivalent to the ASCII codes of the characters of the string. The binary strings should be eight digits long.
  Example: 'man' should return [ '01101101', '01100001', '01101110' ]

\\\\pseudocode////
split the string and loop over each element, return the binary representation for each char
*/

function wordToBin(str) {
  return str.split("").map(elem => `0${elem.charCodeAt().toString(2)}`);
}

module.exports = wordToBin;
