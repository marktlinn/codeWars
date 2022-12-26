/*
Link:
https://www.codewars.com/kata/60cc93db4ab0ae0026761232/train/javascript/6308df48e5ae64004ac01802
Task
A list S will be given. You need to generate a list T from it by following the given process:
    Remove the first and last element from the list S and add them to the list T.
    Reverse the list S
    Repeat the process until list S gets emptied.
The above process results in the depletion of the list S. Your task is to generate list T without mutating the input List S.
Example
  S = [1,2,3,4,5,6]
  T = []
  S = [2,3,4,5] => [5,4,3,2]
  T = [1,6]
  S = [4,3] => [3,4]
  T = [1,6,5,2]
  S = []
  T = [1,6,5,2,3,4]
return T
Note
    size of S goes up to 10^6
    Keep the efficiency of your code in mind.
    Do not mutate the Input.

\\\\pseudocode////
Check if s length is one and if so if the element inside is a number, if so return s
Declace an empty array: T
initialise two indexes to use in traversing the array s
  1 index = 0 for start of the array
  1 index = s.length-1 for the end of the array
declare a boolean "reverse" to switch from which side of teh array we push to T first i.e. from the back or front.
finally initialise a "mid" value to equal the middle point of any unevenly lengthed arrays.

while the start index is less than the end index
  if reverse is false
    check if s[start] is a number, if so push to T
    check if s[end] is a number, if so push to T
    set reverse to true
  if reverse is true
  check if s[end] is a number, if so push to T
    check if s[start] is a number, if so push to T
    set reverse to false
if s.length is not divisible by two (i.e. is not even) & s[mid] is a number, push s[mid] to T.

return T
*/

// function arrange(s) {
//   if (s.length === 1 && typeof s[0] === "number") return s;
//   const T = [];
//   let start = 0;
//   let end = s.length - 1;
//   let reverse = false;
//   const mid = Math.floor(s.length / 2);
//   while (start < end) {
//     if (reverse === false) {
//       if (typeof s[start] === "number") {
//         T.push(s[start]);
//         start++;
//       }
//       if (typeof s[end] === "number") {
//         T.push(s[end]);
//         end--;
//       }
//       reverse = true;
//     } else {
//       if (typeof s[end] === "number") {
//         T.push(s[end]);
//         end--;
//       }
//       if (typeof s[start] === "number") {
//         T.push(s[start]);
//         start++;
//       }
//       reverse = false;
//     }
//   }
//   if (s.length % 2 !== 0 && typeof s[mid] === "number") T.push(s[mid]);
//   return T;
// }

//slightly less verbose version:
//removed initial if statement to streamline the code, moved the reversing boolean value and incrementing start and decrementing end to the end of the loop, as they're necessary with each iteration.
function arrange(s) {
  const T = [];
  let start = 0;
  let end = s.length - 1;
  let reverse = false;
  const mid = Math.floor(s.length / 2);
  while (start < end) {
    if (reverse === false) {
      if (typeof s[start] === "number") {
        T.push(s[start]);
      }
      if (typeof s[end] === "number") {
        T.push(s[end]);
      }
    } else {
      if (typeof s[end] === "number") {
        T.push(s[end]);
      }
      if (typeof s[start] === "number") {
        T.push(s[start]);
      }
    }
    start++;
    end--;
    reverse = !reverse;
  }
  if (s.length % 2 !== 0 && typeof s[mid] === "number") T.push(s[mid]);
  return T;
}

console.log(arrange([1, 2])); //, [1,2]);
console.log(arrange([4, 3, 2])); //, [4, 2, 3]);
console.log(arrange([9, 7, -2, 8, 5, -3, 6, 5, 1])); //, [9, 1, 5, 7, -2, 6, -3, 8, 5]);
console.log(arrange([1])); //, [1]);
console.log(arrange([])); //, []);
console.log(arrange([2, 4, 3, 4])); //,[2, 4, 3, 4]);
