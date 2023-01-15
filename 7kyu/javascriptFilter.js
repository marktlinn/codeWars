/*
Link:
https://www.codewars.com/kata/525d9b1a037b7a9da7000905/train/javascript
While developing a website, you detect that some of the members have troubles logging in. Searching through the code you find that all logins ending with a "_" make problems. So you want to write a function that takes an array of pairs of login-names and e-mails, and outputs an array of all login-name, e-mails-pairs from the login-names that end with "_".
If you have the input-array:
  [ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ]
it should output
  [ [ "bar_", "bar@bar.com" ] ]
You have to use the filter-method which returns each element of the array for which the filter-method returns true.

\\\\pseudocode////
Pairs are given as an array of arrays. The inner arrays consist of login name and email address as two elements. As the login name is the first element, loop thorugh the greater array, and in each inner array return the innerArrays where the first element ends with "_".
*/

function searchNames(logins) {
  return logins.filter(innerArray => innerArray[0].endsWith("_"));
}

const test = [
  ["foo", "foo@foo.com"],
  ["bar_", "bar@bar.com"],
];

console.log(searchNames(test));
