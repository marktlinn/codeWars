/* Failed Sort - Bug Fixing #4
Link: 
https://www.codewars.com/kata/55c7f90ac8025ebee1000062/train/javascript
Oh no, Timmy's Sort doesn't seem to be working? Your task is to fix the sortArray function to sort all numbers in ascending order 
*/
//Code to debug
var sortArray = function (value) {
  return value
    .split("")
    .sort((c, p) => c / p)
    .join("");
};
//it is dividing c by p, rather than subtracting p from c, so it'll not compare the two values in regards to which is greater to the other, which yields a negative number or positive number.

//result => Fixed
const sortArray = value => {
  return value
    .split("")
    .sort((c, p) => c - p)
    .join("");
};
