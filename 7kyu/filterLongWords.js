/*
Link:
https://www.codewars.com/kata/5697fb83f41965761f000052/train/javascript
Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

Example:
  * With input "The quick brown fox jumps over the lazy dog", 4
  * Return ['quick', 'brown', 'jumps']

\\\\pseudocode////
An easy one. Split the string into words and then return all words over the length of the value of n
*/

function filterLongWords(sentence, n) {
  return sentence.split(" ").filter(elem => elem.length > n);
}
