/*
Link:
https://www.codewars.com/kata/5892595f190ca40ad0000095/javascript
Create a function mispelled(word1, word2):

mispelled('versed', 'xersed'); // returns true
mispelled('versed', 'applb'); // returns false
mispelled('versed', 'v5rsed'); // returns true
mispelled('1versed', 'versed'); // returns true
mispelled('versed', 'versed'); // returns true

It checks if the word2 differs from word1 by at most one character.

This can include an extra char at the end or the beginning of either of words.

In the tests that expect true, the mispelled word will always differ mostly by one character. If the two words are the same, return True.


\\\\pseudocode////
check the words length, if not equal, normalise so that the word1 is always bigger : swap values
declare a count to hold the number of times a mistake/mispelling is recognised
loop through the words, 
  if char in words do not match increment the count
    if the lengths are different i.e. word1 is longer also additionally increment word1's index
finally return boolean of if the count is lower than 2
*/

function mispelled(word1, word2) {
  if (word1.length < word2.length) {
    let temp = word1;
    word1 = word2;
    word2 = temp;
  }
  let count = 0;
  for (let i = 0, j = 0; i < word1.length; i++, j++) {
    if (word1[i] !== word2[j]) {
      count++;
      if (word1.length > word2.length) {
        i++;
      }
    }
  }
  return count < 2;
}

module.exports = mispelled;
