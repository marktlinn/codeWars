/*
Link:
https://www.codewars.com/kata/5a8059b1fd577709860000f6/train/javascript
Your task is very simple. Just write a function that takes an input string of lowercase letters and returns true/false depending on whether the string is in alphabetical order or not.
Examples (input -> output)
    "kata" -> false ('a' comes after 'k')
    "ant" -> true (all characters are in alphabetical order)
*/

/*
Pseudocode:
Declare a var equal to the given string, split and sort it
Compare the two
  if equal return true
  else return false
*/

function alphabetic(s) {
  const sortedWord = s.split("").sort().join("");
  return sortedWord === s ? true : false;
}
