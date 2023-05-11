/*
Link:
https://www.codewars.com/kata/56ec1e8492446a415e000b63/javascript
Tranform of input array of zeros and ones to array in which counts number of continuous ones. If there is none, return an empty array

Example
[1, 1, 1, 0, 1] -> [3,1]
[1, 1, 1, 1, 1] -> [5]
[0, 0, 0, 0, 0] -> []
*/

/*
Pseudocode:
Create a flag to be true when a 1 is found, create a results array.
Loop through the elements of the array and store a count of all 1s found. 
  If the found flag is true and the current value is 1 increment the count.
  else if the flag is true and the current element is 0 push the count to the results array and reset count ot 0 and found to false.
  else check each element, ignore 0's, if a 1 is found increment the count and switch the found var to true.
return the result array.
*/

function onesCounter(input) {
  let found = false;
  let count = 0;
  const result = [];
  for (const el of input) {
    if (found) {
      if (el === 1) count += el;
      else {
        result.push(count);
        found = false;
        count = 0;
      }
    } else {
      if (el === 1) {
        count += el;
        found = true;
      }
    }
  }
  if (count > 0) result.push(count);
  return result;
}

console.log(onesCounter([0, 0, 0, 0, 0, 0, 0, 0])); //, [])
console.log(onesCounter([1, 1, 1, 1, 1])); //, [5])
console.log(onesCounter([1, 1, 1, 0, 0, 1, 0, 1, 1, 0])); //, [3, 1, 2])
console.log(onesCounter([0, 0, 0, 1, 0, 0, 1, 1])); //, [1, 2])
console.log(onesCounter([1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1])); //, [1, 2, 4, 1])

module.exports = onesCounter;
