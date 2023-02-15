/*
Link:
https://www.codewars.com/kata/5c563cb78dac1951c2d60f01/train/javascript
 The Club Doorman will give you a word. To enter the Club you need to provide the right number according to provided the word.
Every given word has a doubled letter, like 'tt' in lettuce.
To answer the right number you need to find the doubled letter's position of the given word in the alphabet and multiply this number per 3.
It will be given only words with one doubled letter.
EXAMPLE
  Lettuce is the given word. 't' is the doubled letter and it's position is 20 in the alphabet.
  The answer to the Club Doorman is 20 * 3 = 60

\\\\pseudocode////
create a map and a var to hold an upperCase copy of the string.
loop through the copy and check if the letter exists in the map
  if so return the ASCII charCode for that letter -64 * 3 (to caculate the alphabetical position of the letter)
  else add teh elem to map.
return false;
*/

function passTheDoorMan(word) {
  const map = new Map();
  const upperWord = word.toUpperCase();
  for (let letter of upperWord) {
    if (map.has(letter)) {
      return (Number(letter.charCodeAt()) - 64) * 3;
    } else map.set(letter, 0);
  }
  return false;
}
