/*
Link: 
https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819/train/javascript
Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.
All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.
An example:
  const objA = { a: 10, b: 20, c: 30 }
  const objB = { a: 3, c: 6, d: 3 }
  combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
The combine function should be a good citizen, so should not mutate the input objects.

\\\\pseudocode////
declare and init an object to serve as a map = argMap
Take the arguments given to the function and spread them into an array
loop through the array, each elem is an object, loop through each, checking if the key eists in objMap
  if so, increment the objMap but the value of the current item
  else add the key and value to the argMap
return the argMap
*/

function combine() {
  const argMap = {};
  const args = [...arguments];
  args.forEach(elem => {
    for (const item in elem) {
      if (argMap.hasOwnProperty(item)) {
        argMap[item] += elem[item];
      } else {
        argMap[item] = elem[item];
      }
    }
  });
  return argMap;
}

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const objC = { a: 5, d: 11, e: 8 };
const objD = { c: 3 };
console.log(combine(objA, objB));
// console.log(combine(objA, objB, objC));
// console.log(combine(objA, objB, objC, objD));
