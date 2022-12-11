/*
Link:
https://www.codewars.com/kata/59c01248bf10a47bd1000046/train/javascript
I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.
Passwords must abide by the following requirements:
More than 3 characters but less than 20.
Must contain only alphanumeric characters.
Must contain letters and numbers.
\\\\pseudocode////
is the password is too long or short return invalid.
test if the password includes both only digits and numbers
  if it does, run through every elem and check it is an alphanumeric character
    if so return "VALID"
  else return "INVALID"
return "INVLAID" as criteria not met.
*/

function validPass(password) {
  if (password.length <= 3 || password.length >= 20) {
    return "INVALID";
  }
  if (/\d/.test(password) && /[a-z]/i.test(password)) {
    return password.split("").every(elem => elem.match(/\w/gi))
      ? "VALID"
      : "INVALID";
  }
  return "INVALID";
}

console.log(validPass("Username123")); // , 'VALID' );
console.log(validPass("Username")); // , 'INVALID' );
console.log(validPass("1Username")); // , 'VALID' );
console.log(validPass("123")); // , 'INVALID' );
console.log(validPass("a12")); // , 'INVALID' );
