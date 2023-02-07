/*
Link:
https://www.codewars.com/kata/590f5b4a7bbb3e246000007d/train/javascript
You will be given two inputs: a string of words and a letter. For each string, return the alphabetic character after every instance of letter(case insensitive).
If there is a number, punctuation or underscore following the letter, it should not be returned.
If letter = 'r':
comes_after("are you really learning Ruby?") # => "eenu"
comes_after("Katy Perry is on the radio!")   # => "rya"
comes_after("Pirates say arrrrrrrrr.")       # => "arrrrrrrr"
comes_after("r8 your friend")                # => "i"
Return an empty string if there are no instances of letter in the given string.

\\\\pseudocode////
Create a boolean variable to switch if the letter is found. Initialise as false.
Create a regex from the letter to be case insensitive,
split the string and loop through
  if letterFound true and currentElem is a letter check
    if elem matches letter return elem
    else set letterFound to false and return elem
  else if elem matches the letter set letterFound to true
  else set letterFound to false.
return the result of the loop.
*/

function comes_after(str, l) {
  let letterFound = false;
  const letter = new RegExp(l, "gi");
  return str
    .split("")
    .map(elem => {
      if (letterFound && elem.match(/[a-z]/gi)) {
        if (elem.match(letter)) {
          return elem;
        } else {
          letterFound = false;
          return elem;
        }
      } else if (elem.match(letter)) {
        letterFound = true;
      } else {
        letterFound = false;
      }
    })
    .join("");
}
