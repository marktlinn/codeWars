/*
Link:
https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/javascript
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
Example:
  Input:
    'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
  Output:
    'alpha beta gamma delta'
*/

/*
Pseudocode:
split the string at the spaces and place the elements into a set. Return the keys from the set joined with spaces
*/

function removeDuplicateWords (s) {
  const wordSet = new Set(s.split(' '));
  return Array.from(wordSet.keys()).join(' ')
}