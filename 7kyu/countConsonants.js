/*
Link:
https://www.codewars.com/kata/564e7fc20f0b53eb02000106/train/javascript

Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.
Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

\\\\pseudocode////
write a regex variable to hold all the vowels
  split and reduce the string, if the current element doesn't match the regex var and is a letter, add one to ttl,
    return ttl.
return the reduction.
*/

function consonantCount(str) {
  const regex = /(a|e|i|o|u)/gi;
  return str.split("").reduce((ttl, curr) => {
    if (!curr.match(regex) && curr.match(/[a-z]/gi)) {
      ttl += 1;
    }
    return ttl;
  }, 0);
}
