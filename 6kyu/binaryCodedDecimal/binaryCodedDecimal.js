/*
Link:
https://www.codewars.com/kata/5521d84b95c172461d0000a4/train/javascript
Convert a number to a binary coded decimal (BCD).
You can assume input will always be an integer. If it is a negative number then simply place a minus sign in front of the output string. Output will be a string with each digit of the input represented as 4 bits (0 padded) with a space between each set of 4 bits.
Ex.
  n =  10 -> "0001 0000"
  n = -10 -> "-0001 0000"

\\\\pseudocode////
Use an auxilary function.
Aux func:
  receive a digit and create a template array of 4 0 strings 
    if the digit is a zero return "0000"
    else convert the digit to binary
      if the convertedDigit is <3 in length return it as it is
      else loop through both the template array and the binaryConversion from the end, replace the value in the template for the value in the conversion
    return the template array as a string

Split and loop over the elements of the number given
  if the elem is a "-" return it as it, else call the aux function.
  finally check the first digit of the result from the above loop.
    if the first elem is "-" return a slice of the resulting BCD removing the space between "-" and the first binary element of the BCD.
    else return the BCD as it is.
*/
function makeBit(digit) {
  let template = ["0", "0", "0", "0"];
  if (digit == 0) {
    return template.join("");
  }
  const binNum = digit.toString(2);
  if (binNum.length > 3) {
    return binNum;
  } else {
    for (let i = template.length, j = binNum.length; j >= 0; i--, j--) {
      if (binNum[j]) {
        template[i] = binNum[j];
      }
    }
    return template.join("");
  }
}

function toBcd(number) {
  const stringifiedNumber = String(number).split("");
  const BCD = stringifiedNumber
    .map(elem => {
      if (elem === "-") {
        return elem;
      } else {
        return makeBit(+elem);
      }
    })
    .join(" ");
  return BCD[0] === "-" ? BCD[0] + BCD.slice(2) : BCD;
}

console.log(toBcd(123456789));

module.exports = toBcd;
