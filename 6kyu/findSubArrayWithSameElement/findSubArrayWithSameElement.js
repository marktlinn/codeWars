/*
Link:
https://www.codewars.com/kata/58feb7ac627d2fdadf000111/train/javascript

Given an array of positive integers a and an integer k, find the first and last index of the longest subarray of a that consists only of k.
If the array contains multiple subarrays of the same length, return indices of the last one.
If k doesn't exist in a, return (-1, -1).
Input/Output
  [input] integer array a
  A non-empty array. For each valid i 1 ≤ a[i] ≤ 9.
  [input] integer k
  1 ≤ k ≤ 9.
  [output] an integer array
The first and the last indices of the longest subarray consisting of k only, as an array in the format (start, end), or (-1, -1) if k is not present in a.
Example
  For a = [2,1,1,1,1,3,3,4,5,1,1,1] and k = 3,
  the output should be (5, 6).
  The longest subarray of a that contains 3s starts at index 5 and ends at index 6.
  For a = [2,1,1,1,1,3,3,4,5,1,1,1,1] and k = 1,
  the output should be (9, 12).
  There are two subarrays of 1, and they have equal length. One goes from index 1 to 4, and another one from index 9 to 12. The answer should be (9, 12) as it is the last to occur.
  For a = [1, 2, 3] and k = 9,
  the output should be (-1, -1).

*/

/*
Pseudocode:
declare some vars: 
found = init as false -> switch to true when target number is found
obj = init { k(targetNumber) : 0}
count = 0

loop through the array
  if found is true & element  !== target number
    check if count >= obj[k]][0] + obj[k][1]
      if so set obj[k] = [currentIndex-count, currentIndex-1]
    reset count to 0
    set found to false
  else if found === true & element === target number
    increment count by 1
  else if found === false & element === target
    set found = true
    increment count by 1

*/

function findSubArrayWithSameElement(a, k) {
  let found = false;
  const obj = { [k]: [-1, -1] };
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    if (found === true && a[i] !== k) {
      if (count >= obj[k][1] + 1 - obj[k][0]) {
        obj[k] = [i - count, i - 1];
      }
      count = 0;
      found = false;
    } else if (found === true && a[i] === k) {
      count++;
    } else if (a[i] === k) {
      found = true;
      count++;
    }
  }

  if (count >= obj[k][1] + 1 - obj[k][0]) {
    obj[k] = [a.length - count, a.length - 1];
  }
  return obj[k];
}

module.exports = findSubArrayWithSameElement;
