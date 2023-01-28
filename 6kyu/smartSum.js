/*
Link:
https://www.codewars.com/kata/5831200eb812b8016d000094/train/javascript
Your task is to write a function, smartSum, that returns the sum of an arbitrary number of arguments. But be careful, some of your arguments can be arrays of numbers or nested arrays.

smartSum(1,2,3,[4,5],6); // returns 21
smartSum(1,2,[[3,4],5],6); // returns 21

\\\\pseudocode////
take the arguments passed to the function and store in an array, declare a var to keep a count
loop through the elements in the arguments array
  if elem is itself an array, loop through it and add each element to the count
  else add elem to the count
return count

*/

//First solution: Works for singularly nested arrays
// function smartSum() {
//   const argumentsArr = [...arguments];
//   let count = 0;
//   for (let elem of argumentsArr) {
//     if (Array.isArray(elem)) {
//       elem.flat().forEach(elem => (count += elem));
//     } else {
//       count += elem;
//     }
//   }
//   return count;
// }

//This second solution works on multilayers of nested arrays, as instead of simply incrementing the count with elem values, it recursively calls the smartSum function and increments count by it's return value, meaning it'll go as deep as required by the nesting.
// Although beyond the scope of the challenge this is a better and more bug resistant solution.
function smartSum() {
  const argumentsArr = [...arguments];
  let count = 0;
  for (let elem of argumentsArr) {
    if (Array.isArray(elem)) {
      elem.flat().forEach(elem => (count += smartSum(elem)));
    } else {
      count += elem;
    }
  }
  return count;
}

console.log(smartSum([1, 2], 3)); //6);
//Additional test added by me to test multi-layer of nested arrays.
console.log(smartSum([1, [1, [3]], 2], 3)); //10);
