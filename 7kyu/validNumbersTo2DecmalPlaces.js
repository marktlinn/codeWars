/*
Link:
https://www.codewars.com/kata/55f9064161541a9e01000001/javascript
Check that a number is a valid number that has been given to 2 decimal places. The number passed to the function will be given as a string. If the number satisfies the criteria below, the function should return true, else it should return false.
Please check the criteria for a valid number:
optional + or - symbol in front
optional digits before a decimal point (digits are characters ranging from '0' to '9')
a decimal point
exactly two digits after the point
nothing else

\\\\pseudocode////
The quickest solution to this will be with Regex.
It must start either with a "+", "-" or a digit, it can have multiple digits after the start, then it must have a "." followed by 2 digits only and must end with those two digits.
*/

function validNumber(num) {
  const regex = /(^(\+|-)?\d*?\.\d\d$)/;
  return regex.test(num);
}
console.log(validNumber("0.00")); //,true)
console.log(validNumber(".00")); //,true)
console.log(validNumber("-.00")); //,true)
console.log(validNumber(".30")); //,true)
console.log(validNumber("0.40")); //,true)
console.log(validNumber("34443.33")); //,true)

console.log("FALSES!!!!!!!!!!!!!!!!!!!!!!");
console.log(validNumber(".0a")); //,false)
console.log(validNumber("1.00.")); //,false)
console.log(validNumber(".+00")); //,false)
console.log(validNumber("w.00")); //,false)
console.log(validNumber("..00")); //,false)
console.log(validNumber("1,00")); //,false)
