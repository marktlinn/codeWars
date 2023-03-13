/*
Link:
https://www.codewars.com/kata/5b16490986b6d336c900007d/train/javascript
You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.
Note: the scores will always be unique (so no duplicate values)
Examples
  {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
  {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
  {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

\\\\pseudocode////
loop through the results object
  for each key check the value >= 60
    if so sort the values in descending order
    return only the key
*/

// function myLanguages(results) {
//   return Object.entries(results)
//     .filter(elem => elem[1] >= 60)
//     .sort((a, b) => b[1] - a[1])
//     .map(elem => elem[0]);
// }

// Slightly more efficient version, using Object.keys() This way the mapping of the element's name is removed and the array is only traversed to filter and sort.
function myLanguages(results) {
  return Object.keys(results)
    .filter(elem => results[elem] >= 60)
    .sort((a, b) => results[b] - results[a]);
}

console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 }));

module.exports = myLanguages;
