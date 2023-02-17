/*
Link:
https://www.codewars.com/kata/598d91785d4ce3ec4f000018/train/javascript

Given a string "abc" and assuming that each letter in the string has a value equal to its position in the alphabet, our string will have a value of 1 + 2 + 3 = 6. This means that: a = 1, b = 2, c = 3 ....z = 26.
You will be given a list of strings and your task will be to return the values of the strings as explained above multiplied by the position of that string in the list. For our purpose, position begins with 1.
nameValue ["abc","abc abc"] should return [6,24] because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.
"abc" has a value of 6, while "abc abc" has a value of 12. Now, the value at position 1 is multiplied by 1 while the value at position 2 is multiplied by 2.
Input will only contain lowercase characters and spaces.

\\\\pseudocode////
AUX Function: Convert letter to upperCase and find the ascii code, return the ascii code -64 for the alphabetical place

loop through array of words
Declare a ttlStore var for the cumulative count value
Declare a current value var to store the ongoing current count value
  for each word loop through the elems
    if not a space run the letter through the aux function and add teh returned val to currentVal
    else if it is a space add teh currentVal to ttlStore and reset currentVal to 0
  add currentVal to ttlStore and return ttlStore
*/

function alphaValue(letter) {
  return Number(letter.toUpperCase().charCodeAt(letter)) - 64;
}

function wordValue(a) {
  return a.map((word, i) => {
    let ttlStore = 0;
    let currentVal = 0;

    word.split("").forEach(elem => {
      if (elem !== " ") {
        const num = alphaValue(elem);
        currentVal += num;
      } else if (elem === " ") {
        ttlStore += currentVal;
        currentVal = 0;
      }
    });

    ttlStore += currentVal;
    return ttlStore * (i + 1);
  });
}

// console.log(wordValue());
console.log(wordValue(["codewars", "abc", "xyz"]));
// console.log(wordValue(["abc abc", "abc abc", "abc", "abc"]));
