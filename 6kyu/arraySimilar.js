/*
Link:
https://www.codewars.com/kata/51e704f2d8dbace389000279/train/javascript

Write a function that determines whether the passed in arrays are similar. Similar means they contain the same elements, and the same number of occurrences of elements.
const arr1 = [1, 2, 2, 3, 4],
      arr2 = [2, 1, 2, 4, 3],
      arr3 = [1, 2, 3, 4],
      arr4 = [1, 2, 3, "4"]
  arraysSimilar(arr1, arr2); // Should equal true
  arraysSimilar(arr2, arr3); // Should equal false
  arraysSimilar(arr3, arr4); // Should equal false

\\\\pseudocode////
if the two arrs aren't the same length return false.
else sort both arrays
declare a var to keep count of similarities
  loop throug hone arr and compare each element to the other at the same index, if equal increment count.
if count is equal to the arrays' length return true, else return false
*/

function arraysSimilar(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const refArr = arr2.sort((a, b) => a - b);
  let count = 0;

  arr1
    .sort((a, b) => a - b)
    .forEach((elem, i) => (elem === refArr[i] ? count++ : null));

  return count === arr2.length ? true : false;
}
