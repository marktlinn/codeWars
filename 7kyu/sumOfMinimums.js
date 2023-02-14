/*
Link:
https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript

Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
For Example:
  [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
  , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
  , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
  ]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.
Note: You will always be given a non-empty list containing positive values.

\\\\pseudocode////
initiliase an empty var to hold the minimum values: "minimums"
loop through the array, take the minimum of each sub array and push to "minimums"
return the sum of "minimums"
*/

function sumOfMinimums(arr) {
  const minimums = [];
  arr.forEach(elem => minimums.push(Math.min(...elem)));
  return minimums.reduce((ttl, cur) => ttl + cur);
}
