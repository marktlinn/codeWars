/*
Link:
https://www.codewars.com/kata/58d3487a643a3f6aa20000ff/train/javascript
Given an unsorted array of integers, find the smallest number in the array, the largest number in the array, and the smallest number between the two array bounds that is not in the array.
For instance, given the array [-1, 4, 5, -23, 24], the smallest number is -23, the largest number is 24, and the smallest number between the array bounds is -22. You may assume the input is well-formed.
You solution should return an array [smallest, minimumAbsent, largest]
The smallest integer should be the integer from the array with the lowest value.
The largest integer should be the integer from the array with the highest value.
The minimumAbsent is the smallest number between the largest and the smallest number that is not in the array.
  minMinMax([-1, 4, 5, -23, 24]); //[-23, -22, 24]
  minMinMax([1, 3, -3, -2, 8, -1]); //[-3, 0, 8]
  minMinMax([2, -4, 8, -5, 9, 7]); //[-5, -3,9]

\\\\pseudocode////
Use the Math object to find the min and max, store them in variables
declare and init an empty var to track an index count
declare mid as empty val
run a loop, while mid has no value
  test if min + index exists in the array
    if so, mid = value, break out of loop
  else increment index by one
return array of [min, mid, max]
*/

function minMinMax(array) {
  const min = Math.min(...array);
  const max = Math.max(...array);
  let index = 0;
  let mid;
  while (!mid) {
    const value = min + index;
    if (!array.includes(value)) {
      mid = value;
      break;
    }
    index++;
  }
  return [min, mid, max];
}

console.log(minMinMax([-1, 4, 5, -23, 24])); // [-23, -22, 24];
console.log(minMinMax([1, 3, -3, -2, 8, -1])); // [-3, 0, 8];
console.log(minMinMax([2, -4, 8, -5, 9, 7])); // [-5, -3, 9];
