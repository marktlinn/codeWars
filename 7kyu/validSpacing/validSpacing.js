/*
Link:
https://www.codewars.com/kata/5f77d62851f6bc0033616bd8/train/javascript
Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either true or false (or the corresponding value in each language).

For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Words can be any consecutive sequence of non space characters. Below are some examples of what the function should return:

* 'Hello world'   => true
* ' Hello world'  => false
* 'Hello world  ' => false
* 'Hello  world'  => false
* 'Hello'         => true

Even though there are no spaces, it is still valid because none are needed:
* 'Helloworld'    => true
* 'Helloworld '   => false
* ' '             => false
* ''              => true

Note - there will be no punctuation or digits in the input string, only letters.
*/

/*
Pseudocode:
if the length of string is not equal to string with no trailing or initial white space return false.
else set a boolean var to be used to record if a space has been found.
  loop through the string
    if boolean for spaceFound is true
      if current element is a space return false
      else set boolean back to false
    else if current element = " " set boolean to true
return true
*/

function validSpacing(s) {
  if (s !== s.trim()) return false;

  let spaceFound = false;
  for (let item of s) {
    if (item === " ") {
      if (spaceFound) return false;
      spaceFound = true;
    } else if (spaceFound) {
      spaceFound = false;
    }
  }
  return true;
}

module.exports = validSpacing;
