/*
Link:
https://www.codewars.com/kata/57eb936de1051801d500008a/javascript
You are given an initial 2-value array (x). You will use this to calculate a score.
If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.
Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.
For example:
  if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].
*/

/*
Pseudocode:
create a var to hold a boolean of whether a number is found.
loop through the values of x and sum up all the numbers if any.
  if a number is found flip the boolean var to true

if numberFound var is false return "Void!"
else return an array of the input array repeated for a number of times equal to the sum of the array's numbers
*/

// function explode(x) {
//   const result = [];
//   let numberFound = false;
//   const sum = x.reduce((prev, curr) => {
//     if (typeof curr === "number") {
//       prev += curr;
//       numberFound = true;
//     }
//     return prev;
//   }, 0);

//   for (let i = 0; i < sum; i++) {
//     result.push(x);
//   }

//   return numberFound ? result : "Void!";
// }

// simpler version less verbose, without the need for the second loop
// function explode(x) {
//   let foundNumber = false;
//   const sum = x.reduce((prev, curr) => {
//     if (typeof curr === "number") {
//       foundNumber = true;
//       prev += curr;
//     }
//     return prev;
//   }, 0);
//   if (!foundNumber) return "Void!";
//   return new Array(sum).fill(x);
// }

// third iteration
function explode(x) {
  let foundNumber = false;
  const sumResult = new Array(
    x.reduce((prev, curr) => {
      if (typeof curr === "number") {
        foundNumber = true;
        prev += curr;
      }
      return prev;
    }, 0)
  ).fill(x);
  return foundNumber ? sumResult : "Void!";
}

console.log(explode([6, "c"]));
console.log(explode(["a", "c"]));
//[6, "c"],[6, "c"],[6, "c"],[6, "c"],[6, "c"],[6, "c"],
module.exports = explode;
