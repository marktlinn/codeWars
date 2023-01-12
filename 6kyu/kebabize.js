/*
Link:
https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript
Modify the kebabize function so that it converts a camel case string into a kebab case.
  kebabize('camelsHaveThreeHumps') // camels-have-three-humps
  kebabize('camelsHave3Humps') // camels-have-humps
Notes:
    the returned string should only contain lowercase letters

\\\\pseudocode////
create a var to be an empty string
Then loop through the input string and check if each letter is uppercase, 
  if it is convert it to lowercase and add it preceeded by a '-' to the new string
  else add the letter to the string with no changes
To check if a letter is uppercase, I'll check the ASCII value of that char.
  if the value is >= 65 or <=90 it's uppercase
  else if it's >=97 or <= 122 it's lowercase
  else it's not a letter and can be ignored.
Check the resultString's first index, 
  if it's a "-" return everything after it
  else return the entire resultString
*/

function kebabize(str) {
  let resultString = "";
  for (let i = 0; i < str.length; i++) {
    const currentLetterCode = str.charCodeAt(i);
    if (currentLetterCode >= 97 && currentLetterCode <= 122) {
      resultString += str[i];
    } else if (currentLetterCode >= 65 && currentLetterCode <= 90) {
      resultString += `-${str[i].toLowerCase()}`;
    }
  }
  return resultString[0] === "-" ? resultString.slice(1) : resultString;
}

console.log(kebabize("myCamelCasedString")); //, 'my-camel-cased-string');
console.log(kebabize("myCamelHas3Humps")); //, 'my-camel-has-humps');
