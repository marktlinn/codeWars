/*
This Kata is intended as a small challenge for my students

Create a function, called removeVowels (or remove_vowels), that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

removeVowels("drake") // => "drk"
removeVowels("aeiou") // => ""
\\\\pseudocode////
split the string and then filter the array for any vowels. Return the joined result.
*/

const removeVowels = function (str) {
  return str
    .split("")
    .filter(letter => !letter.match(/[aeiou]/gi))
    .join("");
};
