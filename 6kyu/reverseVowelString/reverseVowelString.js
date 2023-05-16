/*
Link:
https://www.codewars.com/kata/585db3e8eec141ce9a00008f/javascript
In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

"Hello!" => "Holle!"
"Tomatoes" => "Temotaos"
"Reverse Vowels In A String" => "RivArsI Vewols en e Streng"

For simplicity, you can treat the letter y as a consonant, not a vowel.
*/

/*
Pseudocode:
Run a match through the string, match all vowels and store in an array
loop through the string and create a new string.
  if the element in the string is a vowel,
    take the last index of the stored Array vowels and add it to the new string, then decrement the index of the arrayVowels
  else add the element to the new string
return the new string.
*/

function reverseVowels(str) {
  const vowels = /[aeiou]/gi;
  const vowelArray = (arr = str.match(vowels));
  if (!vowelArray) return str;

  let arraySize = vowelArray.length - 1;
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(vowels)) {
      newString += vowelArray[arraySize];
      arraySize--;
    } else {
      newString += str[i];
    }
  }
  return newString;
}

module.exports = reverseVowels;
