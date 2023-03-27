/*
Link:
https://www.codewars.com/kata/5ef0456fcd067000321baffa/train/javascript

You will be given a string with sets of characters, (i.e. words), seperated by between one and three spaces (inclusive).
Looking at the first letter of each word (case insensitive-"A" and "a" should be treated the same), you need to determine whether it falls into the positive/first half of the alphabet ("a"-"m") or the negative/second half ("n"-"z").
Return True/true if there are more (or equal) positive words than negative words, False/false otherwise.
  "A big brown fox caught a bad rabbit" => True/true
  "Xylophones can obtain Xenon." => False/false

\\\\pseudocode////
ASCII codes (a-m LOWERCASE) = 097-109 ; ASCII codes (n-z) = 110-122
create two counts: positive and negative;
convert whole string to lowercase
split up the string by spaces,
if the elem is truthy and not undefined :
  loop thorugh word elements and test first letter's ascii code, if between 97-109 increment positive count, else negative count
if positive count >= negative return True/true
  else False/false

*/

function connotation(str) {
  let positive = 0;
  let negative = 0;
  str
    .toLowerCase()
    .split(" ")
    .forEach(elem => {
      if (elem[0]) {
        const elsCharCode = elem[0].charCodeAt();
        if (elsCharCode >= 97 && elsCharCode <= 109) {
          positive++;
        } else negative++;
      }
    });
  return positive >= negative ? true : false;
}

// console.log(connotation("A big brown fox caught a bad bunny"));
console.log(connotation("Is  this the  best  Kata?"));

module.exports = connotation;
