/*
Link:
https://www.codewars.com/kata/565c4e1303a0a006d7000127/train/javascript
Format any integer provided into a string with "," (commas) in the correct places.
Example:
  For n = 100000 the function should return '100,000';
  For n = 5678545 the function should return '5,678,545';
  for n = -420902 the function should return '-420,902'.
*/

/*
Pseudocode:
Convert the number to a string
if the string is longer than 3 return the string as it is.
else take slices of three stepping back
*/

//solving the issue with an algorithm
// const numberFormat = number => {
//   let resultStr = [];
//   const strNum = String(number);
//   let count = 0;
//   for (let i = strNum.length - 1; i >= 0; i--) {
//     count++;
//     if (count === 3 && strNum[i - 1]) {
//       /[0-9]/.test(strNum[i - 1])
//         ? resultStr.unshift(`,${strNum[i]}`)
//         : resultStr.unshift(strNum[i]);
//       count = 0;
//     } else {
//       resultStr.unshift(strNum[i]);
//     }
//   }
//   return resultStr.join("");
// };

// a shorter solution using built in string parsing method
numberFormat = n => n.toLocaleString();

console.log(numberFormat(100000));
console.log(numberFormat(-100000));
console.log(numberFormat(-5678545));

module.exports = numberFormat;
