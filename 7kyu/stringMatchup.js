/*
Given two arrays of strings, return the number of times each string of the second array appears in the first array.
Example
  array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
  array2 = ['abc', 'cde', 'uap']
How many times do the elements in array2 appear in array1?
    'abc' appears twice in the first array (2)
    'cde' appears only once (1)
    'uap' does not appear in the first array (0)
Therefore, solve(array1, array2) = [2, 1, 0]

\\\\pseudocode////
Assuming array b contains no duplicates
make a new Map then loop through each element of array a.
  if the element exists in Map, increment the value by 1;
  else add to map with value of 1
return the values of the Map.

////EDIT\\\\
The challenge does contain duplicate values in the b array and they must be counted separately and represented separately in the returned array.
Loop through b and check it against each element of a, keeping a count for each time it is found, when the loop finishes push the count to an array to hold it and reset the ongoing count to 0.
return the array of counts
*/

// This is how I would do it placing everything into an object or data structure to be more efficient. The actual challenge doesn't allow for this type of efficiency. It requires each value be represented in place and for duplicates values to be treated as individuals in the b Array, which will require multiple loops.

// function solve(a, b) {
//   const valueCounts = new Map();
//   b.forEach(elem => valueCounts.set(elem, 0));
//   a.forEach(elem =>
//     valueCounts.has(elem)
//       ? valueCounts.set(elem, valueCounts.get(elem) + 1)
//       : null
//   );
//   return valueCounts;
// }

//My solution to the problem.
function solve(a, b) {
  const valueCounts = [];
  b.forEach(elem => {
    let currentCount = 0;
    a.forEach(subElem => (elem === subElem ? currentCount++ : null));
    valueCounts.push(currentCount);
  });
  return valueCounts;
}

console.log(solve(["abc", "abc", "xyz", "abcd", "cde"], ["abc", "cde", "uap"])); //, [2, 1, 0]);
// console.log(solve(["abc", "xyz", "abc", "xyz", "cde"], ["abc", "cde", "xyz"])); //, [2, 1, 2]);
// console.log(
//   solve(["quick", "brown", "fox", "is", "quick"], ["quick", "abc", "fox"])
// ); //, [2, 0, 1]);

console.log(
  solve(
    [
      "abcde",
      "bcdefghi",
      "efg",
      "fghijklm",
      "ef",
      "bcde",
      "fghij",
      "ef",
      "defghi",
      "cdefghij",
    ],
    ["abc", "abc", "bcdefghi", "ef", "efg"]
  )
);
