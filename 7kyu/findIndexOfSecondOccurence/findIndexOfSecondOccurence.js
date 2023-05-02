/*
Link:
https://www.codewars.com/kata/63f96036b15a210058300ca9/train/javascript
In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.

Examples:
  secondSymbol('Hello world!!!','l')  --> 3
  secondSymbol('Hello world!!!', 'A') --> -1
*/

/*
Pseudocode:
Initilise a var at 0 to keep count of times the symbol is found.
Loop through arr
  if symbol is 1 and element at index is symbol return the current index
  else if element at index is symbol increment var
return -1 if loop exits without returning index value (as second occurece never found)
*/

function secondSymbol(s, symbol) {
  let symbolOccurence = 0;
  for (let i = 0; i < s.length; i++) {
    if (symbolOccurence === 1) {
      if (s[i] === symbol) return i;
    } else {
      if (s[i] === symbol) symbolOccurence++;
    }
  }
  return -1;
}

module.exports = secondSymbol;
