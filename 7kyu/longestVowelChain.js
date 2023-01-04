/*
Link:
https://www.codewars.com/kata/59c5f4e9d751df43cf000035/train/javascript

Instructions
Output
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

\\\\pseudocode////
create a boolean to represent if a vowel has been found, an empty array to hold a total and a var to keep count inititialised at 0
loop through the letters, 
  if they match a e i o or u switch the vowelFound bool to true and increment the count var
  else push the count so far to total
    revert the count back to zero and vowelFound back to false
return the maximum value of the total array.
*/

function solve(s) {
  let vowelFound = false;
  const ttl = [];
  let count = 0;
  for (const value of s) {
    if (value.match(/(a|e|i|o|u)/gi)) {
      vowelFound = true;
      count++;
    } else {
      ttl.push(count);
      count = 0;
      vowelFound = false;
    }
  }
  return Math.max(...ttl);
}

console.log(solve("codewarriors")); //,2);
// console.log(solve("suoidea")); //,3);
// console.log(solve("ultrarevolutionariees")); //,3);
// console.log(solve("strengthlessnesses")); //,1);
// console.log(solve("cuboideonavicuare")); //,2);
// console.log(solve("chrononhotonthuooaos")); //,5);
// console.log(solve("iiihoovaeaaaoougjyaw")); //,8);
