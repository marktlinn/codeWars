/*
Link:
https://www.codewars.com/kata/5d41e16d8bad42002208fe1a/train/javascript

Create a moreZeros function which will receive a string for input, and return an array (or null terminated string in C) containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.
You should remove any duplicate characters, keeping the first occurrence of any such duplicates, so they are in the same order in the final array as they first appeared in the input string.
Examples
  'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
                True       True       False      True       False  
          --> ['a','b','d']
  'DIGEST'--> ['D','I','E','T']
All input will be valid strings of length > 0. Leading zeros in binary should not be counted.

\\\\pseudoCode////
Create a helper function.
The function should take in a vlaue, convert that value to Ascii and then from that ascii number to binary
Then initialise two vars "ones" & "zeros" to 0;
Take the converted value as a string and split it and loop over each element to test if it a one or not.
  if it is a one increment "ones"
  if it is a zero increment "zeros"
finally, if ones >= zeros return false, else true.

in the main function,
initialise an empty array, to hold the result
take the string and split place within a new Set() to remove any duplicate values before looping over the data.
  loop through the set and run the helper function on each elem
    if true is return, push value to result array
return the result array.

*/
function binCounter(value) {
  const code = value.charCodeAt().toString(2);
  let ones = 0;
  let zeros = 0;
  String(code)
    .split("")
    .forEach(elem => (elem == 1 ? ones++ : zeros++));
  return ones >= zeros ? false : true;
}

function moreZeros(s) {
  const result = [];
  const string = new Set(s.split(""));
  string.forEach(val => (binCounter(val) === true ? result.push(val) : null));
  return result;
}

// console.log(moreZeros("abcde")); //,['a','b','d'])
// console.log(moreZeros("Great job!")); //,['a', ' ', 'b', '!'])
// console.log(moreZeros("DIGEST")); //,['D','I','E','T'])

console.log("8".charCodeAt().toString(2));
