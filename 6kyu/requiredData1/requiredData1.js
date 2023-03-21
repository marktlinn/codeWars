/*
Link:
https://www.codewars.com/kata/55f95dbb350b7b1239000030/train/javascript
We need a function count_sel() that receives an array or list of integers (positive and negative) and may give us the following information in the order and structure presented bellow:
[(1), (2), (3), [[(4)], 5]]
  (1) - Total amount of received integers.
  (2) - Total amount of different values the array has.
  (3) - Total amount of values that occur only once.
  (4) and (5) both in a list
  (4) - It is (or they are) the element(s) that has (or have) the maximum occurrence. If there are more than one, the elements should be sorted (by their value obviously)
  (5) - Maximum occurrence of the integer(s)
Let's see some cases

____ count_sel([-3, -2, -1, 3, 4, -5, -5, 5, -1, -5]) ----> [10, 7, 5, [[-5], 3]]
  (1) - The list has ten elements (10 numbers)
  (2) - We have seven different values: -5, -3, -2, -1, 3, 4, 5 (7 values)
  (3) - The numbers that occur only once: -3, -2, 3, 4, 5 (5 values)
  (4) and (5) - The number -5 occurs three times (3 occurrences)
____ count_sel([4, 4, 2, -3, 1, 4, 3, 2, 0, -5, 2, -2, -2, -5]) ----> [14, 8, 4, [[2, 4], 3]]

\\\\pseudocode////
Declare a map to keep count of integers.
declare a maxAppearance var to hold the max number of times an element appears
declare an object to hold the data of the array: the values occuring once, multiole times etc
loop through elems
  if elem in map increment the value for elem
  else add elem to map: elem = key, value = 1;
loop over the map, 
  if key's value is 1 or more and it is greater than the maxAppearance val 
    push key to moreThanOnce in obj and update maxAppearance to val
  else val>= 1 and === maxAppearance push key to moreThanOnce in obj
  if Val is only 1 push key to once Object value
return data in the presecribed format according to the challenge
*/

function countSel(lst) {
  const mapper = new Map();
  let maxAppearance = 0;
  const arrayData = {
    once: [],
    moreThanOnce: [],
  };
  lst.forEach(elem => {
    if (mapper.has(elem)) {
      const currentValue = mapper.get(elem);
      mapper.set(elem, currentValue + 1);
    } else {
      mapper.set(elem, 1);
    }
  });
  mapper.forEach((val, key) => {
    if (val >= 1 && val > maxAppearance) {
      arrayData.moreThanOnce = [key];
      maxAppearance = val;
    } else if (val >= 1 && val === maxAppearance) {
      arrayData.moreThanOnce.push(key);
    }
    if (val === 1) {
      arrayData.once.push(key);
    }
  });
  return [
    lst.length,
    mapper.size,
    arrayData.once.length,
    [arrayData.moreThanOnce.sort((a, b) => a - b), maxAppearance],
  ];
}

console.log(countSel([-3, -2, -1, 3, 4, -5, -5, 5, -1, -5]));

// .toEqual([10,7,5,[[-5], 3],]);)
// console.log(countSel([-2, 4, 4, -2, -2, -1, 3, 5, -5, 5])); //, [10, 6, 3, [[-2], 3]]);
// console.log(countSel([4, -5, 1, -5, 2, 4, -1, 4, -1, 1])); //, [10, 5, 1, [[4], 3]]);
// console.log(countSel([4, 4, 2, -3, 1, 4, 3, 2, 0, -5, 2, -2, -2, -5])); //, [14, 8, 4, [[2, 4], 3]]);

// console.log(
//   countSel([
//     -1429, 309, -91, 1169, -688, -461, 751, -256, 1283, 512, 246, 458, -965,
//     1181, 633, -1566, -672, 582, 740, -962, 1540, -1488, -1554, -961, 249, -530,
//     -547, 509, -328, -1357, 323, 1099, 149, 454, -1617, 1318, -918, 452, -456,
//     361, 1131, -1474, 888,
//   ])
// );
// expected [ 43, 43, 43, [ [], +0 ] ]
// to deeply equal
// [ 43, 43, 43, [ [ -1617, -1566, -1554, -1488, -1474, -1429, -1357, -965, -962, -961, -918, -688, -672, -547, -530, -461, -456, -328, -256, -91, 149, 246, 249, 309, 323, 361, 452, 454, 458, 509, 512, 582, 633, 740, 751, 888, 1099, 1131, 1169, 1181, 1283, 1318, 1540 ], 1 ] ]

// [ 34, 34, 34, [ [], +0 ] ] to deeply equal [ 34, 34, 34, [ [ -2107, -2047, -2041, -1870, -1817, -1718, -1565, -1512, -1417, -1243, -1229, -1198, -908, -826, -450, -428, -394, -257, -136, -69, 33, 306, 333, 799, 905, 1011, 1185, 1230, 1430, 1448, 1483, 1708, 1725, 2212 ], 1 ] ]

module.exports = countSel;
