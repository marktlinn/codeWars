/*
Link: 
https://www.codewars.com/kata/555de49a04b7d1c13c00000e/train/javascript
This kata is all about adding numbers.
You will create a function named add. It will return the sum of all the arguments. Sounds easy, doesn't it?
Well Here's the Twist. The inputs will gradually decrease with their index as parameter to the function.
  add(3,4,6); 
  returns ( 3 / 1 ) + ( 4 / 2 ) + ( 6 / 3 ) = 7
  Remember the function will return 0 if no arguments are passed and it must round the result if sum is a float.
  Example
    add(); //=> 0
    add(1,2,3); //=> 3
    add(1,4,-6,20); //=> 6

\\\\pseudocode////
Initialise an empty var as 0
loop over any arguments passed to the function, for each elem add the elem/index+1 to the total
return the total rounded to the nearest integer.
*/

function add() {
  let total = 0;
  [...arguments].forEach((elem, i) => (total += elem / (i + 1)));
  return Math.round(total);
}

module.exports = add;
