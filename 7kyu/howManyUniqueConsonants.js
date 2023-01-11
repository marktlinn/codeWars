/*
Link:
https://www.codewars.com/kata/5a19226646d843de9000007d/train/javascript
Complete the function that counts the number of unique consonants in a string (made up of printable ascii characters).
Consonants are letters used in English other than "a", "e", "i", "o", "u".
Remember, your function needs to return the number of unique consonants - disregarding duplicates. For example, if the string passed into the function reads "add", the function should return 1 rather than 2, since "d" is a duplicate.
Similarly, the function should also disregard duplicate consonants of differing cases. For example, "Dad" passed into the function should return 1 as "d" and "D" are duplicates.
Examples
  "add" ==> 1
  "Dad" ==> 1
  "aeiou" ==> 0
  "sillystring" ==> 7
  "abcdefghijklmnopqrstuvwxyz" ==> 21
  "Count my unique consonants!!" ==> 7

\\\\pseudocode////
Use a helper function to test each letter mateches a criteria:
  if letter is a vowel || is not a letter return false

initialise a variables consonantCount at zero
convert the string to lowercase and split the it into elements and create a new set to remove any duplicates.
run a forEach over the set and check if each element is a consonant: use the helper function
  if so increment consonantCount
return consonantCount
*/

function matchCriteria(letter) {
  if (letter.match(/a|e|i|o|u/gi) || !letter.match(/[a-z]/gi)) {
    return false;
  } else {
    return true;
  }
}

function countConsonants(str) {
  let consonantCount = 0;
  const strippedStr = new Set(str.toLowerCase().split(""));
  strippedStr.forEach(elem => (matchCriteria(elem) ? consonantCount++ : null));
  return consonantCount;
}

console.log(countConsonants("add")); // ==> 1
console.log(countConsonants("Dad")); // ==> 1
console.log(countConsonants("aeiou")); // ==> 0
console.log(countConsonants("sillystring")); // ==> 7
console.log(countConsonants("abcdefghijklmnopqrstuvwxyz")); // ==> 21
console.log(countConsonants("Count my unique consonants!!")); // ==> 7
