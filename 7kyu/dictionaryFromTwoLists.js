/*
Link:
https://www.codewars.com/kata/5533c2a50c4fea6832000101/train/javascript
There are two lists, possibly of different lengths. The first one consists of keys, the second one consists of values. Write a function createDict(keys, values) that returns a dictionary created from keys and values. If there are not enough values, the rest of keys should have a None (JS null)value. If there not enough keys, just ignore the rest of values.
Example 1:
  keys = ['a', 'b', 'c', 'd']
  values = [1, 2, 3]
  createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3, 'd': null}

Example 2:
  keys = ['a', 'b', 'c']
  values = [1, 2, 3, 4]
  createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3}
\\\\pseudocode////
Initialise an empty object
loop through the keys returning an object
  if values at the same index as key is not 'undefined' use that value as the value in the object created
  else the value = null
return the results object
*/
function createDict(keys, values) {
  const resultObj = {};
  keys.forEach((elem, index) =>
    values[index] !== undefined
      ? (resultObj[elem] = values[index])
      : (resultObj[elem] = null)
  );
  return resultObj;
}

console.log(createDict(["a", "b", "c"], [1, 2, 3])); // {'a': 1, 'b': 2, 'c': 3})
console.log(createDict(["a", "b", "c"], [1, 2, 3, 4])); // {'a': 1, 'b': 2, 'c': 3})
console.log(createDict(["a", "b", "c", "d"], [1, 2, 3])); //{'a': 1, 'b': 2, 'c': 3, 'd':null})
