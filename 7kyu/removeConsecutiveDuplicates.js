/*
Link:
https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/train/javascript
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:
"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  --> "alpha beta gamma delta alpha beta gamma delta"

\\\\pseudocode////
Split the string and filter it, if current element is not equal to the previous element return it.
return the result of the filter joined
*/

const removeConsecutiveDuplicates = s => {
  const str = s.split(" ");
  return str.filter((elem, i) => elem !== str[i - 1]).join(" ");
};
