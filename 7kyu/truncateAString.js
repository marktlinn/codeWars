/*
Link:
https://www.codewars.com/kata/57af26297f75b57d1f000225/train/javascript
Truncate the given string (first argument) if it is longer than the given maximum length (second argument). Return the truncated string with a "..." ending.
Note that inserting the three dots to the end will add to the string length.
However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.
Examples
  ('codewars', 9)  ==>  'codewars'
  ('codewars', 7)  ==>  'code...'
  ('codewars', 2)  ==>  'co...'

\\\\pseudocode////
if the string length is less than the num return the string as it is
else if the number os less than or equal to 3 return a slice of the string up to the num + "..."
else truncate the string, returning a slice from 0 to num-3 + "..."
*/

function truncateString(str, num) {
  if (str.length <= num) return str;
  if (num <= 3) {
    return `${str.slice(0, num)}...`;
  } else {
    return `${str.slice(0, num - 3)}...`;
  }
}
