/*
Link:
https://www.codewars.com/kata/5596f6e9529e9ab6fb000014/train/javascript
Write a function that receives two strings and returns n, where n is equal to the number of characters we should shift the first string forward to match the second. The check should be case sensitive.
For instance, take the strings "fatigue" and "tiguefa". In this case, the first string has been rotated 5 characters forward to produce the second string, so 5 would be returned.
If the second string isn't a valid rotation of the first string, the method returns -1.
Examples:
  "coffee", "eecoff" => 2
  "eecoff", "coffee" => 4
  "moose", "Moose" => -1
  "isn't", "'tisn" => 2
  "Esham", "Esham" => 0
  "dog", "god" => -1
\\\\pseudocode////
Check if the lengths of teh string match, if not return -1 immediately.
set a roationCount = 0
loop over the first string, from the last element to the first
  slice the first string from the end elem and concatenate to the beginning of the string, test if it maches the second func argument.
    if so return rotation count
    else increment rotation count and continue the loop
  if no matches found return -1
*/
function shiftedDiff(first, second) {
  if (first.length !== second.length) return -1;
  let rotationCount = 0;
  for (let i = first.length; i > 0; i--) {
    const rotation = first.slice(i) + first.slice(0, i);
    if (rotation === second) return rotationCount;
    rotationCount++;
  }
  return -1;
}

console.log(shiftedDiff("eecoff", "coffee")); // Output: 4
console.log(shiftedDiff("moose", "Moose")); // Output: -1
console.log(shiftedDiff("isn't", "'tisn")); // Output: 2
console.log(shiftedDiff("Esham", "Esham")); // Output: 0
console.log(shiftedDiff("dog", "god")); // Output: -1
console.log(shiftedDiff("fatigue", "tiguefa")); // 5;
