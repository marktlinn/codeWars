/*Link:
https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}.
\\\pseudocode///
if string length === 0 return an empty object.
otherwise declare an empty object, split and loop over the string, add the letters as keys to the string if they don't exist in the object, else increment by 1
return the object
*/

function count(string) {
  if (string.length === 0) return {};
  const letters = {};
  string
    .split("")
    .forEach(elem => (letters[elem] ? letters[elem]++ : (letters[elem] = 1)));
  return letters;
}
