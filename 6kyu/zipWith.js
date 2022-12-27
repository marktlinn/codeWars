/*
Link: https://www.codewars.com/kata/5825792ada030e9601000782/train/javascript

Implement zipWith
zipWith takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
The function value is one new array.
If the arrays are of unequal length, the output will only be as long as the shorter one.
(Values of the longer array are simply not used.)
Inputs should not be modified.
Examples
  zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
  zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]
  zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both forms are valid.
  zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both are functions.
Input validation
Assume all input is valid.

\\\\pseudocode////
declare a "result" array = []
check the length of the two arrays, 
  if they are the same
    start a for loop for the length of the arrays and push the result of the function on both elements at current index to result array
  else find the length of the shortest array and run the smae loop as above but for the length of the shortest array
return the result array.

*/

const plus = (a, b) => a + b;

function zipWith(fn, a0, a1) {
  const result = [];
  if (a0.length === a1.length) {
    for (let i = 0; i < a0.length; i++) {
      result.push(fn(a0[i], a1[i]));
    }
  } else {
    const shorterArr = Math.min(a0.length, a1.length);
    for (let i = 0; i < shorterArr; i++) {
      result.push(fn(a0[i], a1[i]));
    }
  }
  return result;
}

console.log(zipWith(plus, [0, 1, 2, 3, 4, 5], [6, 5, 4, 3, 2, 1])); // [6,6,6,6,6,6]
