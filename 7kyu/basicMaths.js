/*
Link:
https://www.codewars.com/kata/5809b62808ad92e31b000031/train/javascript
In this kata, you will do addition and subtraction on a given string. The return value must be also a string.
Note: the input will not be empty.
Examples
  "1plus2plus3plus4"  --> "10"
  "1plus2plus3minus4" -->  "2"

\\\\pseudocode////
replace all the words "minus" or "plus" with the corresponding arithmetical symbol
run an eval over the string to evaluate the addition or subtraction and return the result as a string

***Using eval here as the inputs are clean, in a production environment or taking unkown inputs I wouldn't use efval due to the potential security risks it'd pose, as it could be replaced with loop through the string and conditionally adding or subtracting dependent on the operator found, but here given the conditions and brevity "eval" is acceptable.***
*/

function calculate(str) {
  let newStr = str.replaceAll(/plus/gi, "+");
  newStr = newStr.replaceAll(/minus/gi, "-");
  return String(eval(newStr));
}
