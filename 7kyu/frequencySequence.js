/*
Link: 
https://www.codewars.com/kata/585a033e3a36cdc50a00011c/train/javascript
Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).

Example (s, sep --> Output)
  "hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
  "19999999"   , ":" --> "1:7:7:7:7:7:7:7"
  "^^^**$"     , "x" --> "3x3x3x2x2x1"

\\\\pseudocode////
create a map to store a count of all the char elements in teh string,
loop through the string
  if elem in charMap increment value by 1
  else initialise value as 1
split and map the string returning the value for each letter key in the charMap
join with the "sep" argument and return.
*/

function freqSeq(str, sep) {
  const charMap = new Map();
  for (const letter of str) {
    if (charMap.has(letter)) {
      const val = charMap.get(letter);
      charMap.set(letter, val + 1);
    } else charMap.set(letter, 1);
  }
  return str
    .split("")
    .map(lett => charMap.get(lett))
    .join(`${sep}`);
}

console.log(freqSeq("hello world", "-")); //, '1-1-3-3-2-1-1-2-1-3-1');
console.log(freqSeq("19999999", ":")); //, '1:7:7:7:7:7:7:7');
console.log(freqSeq("^^^**$", "x")); //, '3x3x3x2x2x1');
