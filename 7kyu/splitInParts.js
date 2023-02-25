/*
Link: 
https://www.codewars.com/kata/5650ab06d11d675371000003/train/javascript
The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)
Example:
Split the below string into other strings of size #3
  'supercalifragilisticexpialidocious'
Will return a new string
  'sup erc ali fra gil ist ice xpi ali doc iou s'
Assumptions:
  String length is always greater than 0
  String has no spaces
  Size is always positive

\\\\pseudocode////
declare and initialise a var to be an empty string. Loop over the given string and slice from the current index to the current index + the length argument passed.
add taht element plus an additional space to the string var.
return the string var trimmed of any white space at the beginning or end.
*/

const splitInParts = (s, partLength) => {
  let str = "";
  for (let i = 0; i < s.length; i += partLength) {
    str += `${s.slice(i, partLength + i)} `;
  }
  return str.trim();
};

console.log(splitInParts("supercalifragilisticexpialidocious", 3));
// 'sup erc ali fra gil ist ice xpi ali doc iou s'
console.log(splitInParts("HelloKata", 1)); //, "H e l l o K a t a");
console.log(splitInParts("HelloKata", 9)); //, "HelloKata");
