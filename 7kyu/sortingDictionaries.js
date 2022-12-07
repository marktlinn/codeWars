/*
Link:
https://www.codewars.com/kata/53da6a7e112bd15cbc000012/train/javascript
Python dictionaries are inherently unsorted. So what do you do if you need to sort the contents of a dictionary?
Create a function that returns a sorted list of (key, value) tuples (Javascript: arrays of 2 items).
The list must be sorted by the value and be sorted largest to smallest.
Examples
  sortDict({3:1, 2:2, 1:3}) == [[1,3], [2,2], [3,1]]
  sortDict({1:2, 2:4, 3:6}) == [[3,6], [2,4], [1,2]]
\\\\pseudocode////
Go through the entries of the object and sort according to values in descending order.
Map through the sortedObject and ensure the key item is a number
  if the key item is not a number return the key item as it
  else return it as a number type
return teh result of the map
*/

function sortDict(dict) {
  const sortedObject = Object.entries(dict).sort((a, b) => b[1] - a[1]);
  return sortedObject.map(elem =>
    isNaN(elem[0]) ? [elem[0], elem[1]] : [+elem[0], elem[1]]
  );
}
