/*
Link:
https://www.codewars.com/kata/5840586b5225616069000001/train/javascript
You will be given two ASCII strings, a and b. Your task is write a function to determine which one of these strings is "worth" more, and return it.
A string's worth is determined by the sum of its ASCII codepoint indexes. So, for example, the string HELLO has a value of 372: H is codepoint 72, E 69, L 76, and O is 79. The sum of these values is 372.
In the event of a tie, you should return the first string, i.e. a.
*/

/*
Pseudocode:
loop over each string and sum up the value of each char
compare the sums from each string. If a >= b return a, else return b
*/

function highestValue(a, b) {
  const str1 = a.split("").reduce((ttl, cur) => (ttl += +cur.charCodeAt()), 0);
  const str2 = b.split("").reduce((ttl, cur) => (ttl += +cur.charCodeAt()), 0);
  return str1 >= str2 ? a : b;
}

console.log(highestValue("AaBbCcXxYyZz0189", "KkLlMmNnOoPp4567")); //, "KkLlMmNnOoPp4567")
console.log(highestValue("ABcd", "0123")); //, "ABcd")
