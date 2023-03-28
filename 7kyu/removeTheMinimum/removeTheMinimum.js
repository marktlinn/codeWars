/*
Link:
https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript
nstructions
Output
The museum of incredible dull things

The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
Task

Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.
Examples

* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]

\\\\pseudocode////
Find the smallest number with Math.on and then filter the first digit of that value form the array returning all other digits, including duplicates of that value.
*/

function removeSmallest(numbers) {
  const smallestInt = Math.min(...numbers);
  let minRemoved = false;
  return numbers.filter(elem => {
    if (minRemoved === false && elem === smallestInt) {
      minRemoved = true;
      return;
    } else {
      return elem;
    }
  });
}

console.log(removeSmallest([1, 2, 3, 4, 5])); //, [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
console.log(removeSmallest([5, 3, 2, 1, 4])); //, [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
console.log(removeSmallest([2, 2, 1, 2, 1])); //, [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");

module.exports = removeSmallest;
