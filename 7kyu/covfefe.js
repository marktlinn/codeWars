/* 
Link:
https://www.codewars.com/kata/592fd8f752ee71ac7e00008a/train/javascript

Your are given a string. You must replace any occurence of the sequence coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.

For the languages where the string is not immutable (such as ruby), don't modify the given string, otherwise this will break the test cases.

\\\\pseudocode////
create a boolean switch to register if the word coverage has been found
loop through the str and check each word
  if word === "coverage" return "covfefe" and switch bool to true
  else return elem
if bool true return the result as it is
else return result + " covfefe"
*/

//Solution 1, works for with older version of Node too.
// function covfefe(str) {
//   let conversion = false;
//   const result = str
//     .split(" ")
//     .map(elem => {
//       if (elem === "coverage") {
//         conversion = true;
//         return "covfefe";
//       }
//       return elem;
//     })
//     .join(" ");
//   return conversion ? result : result + " covfefe";
// }

//Solution 2 for node v15 and greater
function covfefe(str) {
  const result = str.replaceAll(/coverage/gi, "covfefe");
  return result === str ? `${result} covfefe` : result;
}

console.log(covfefe("coverage")); //,"covfefe");
console.log(covfefe("coverage coverage")); //,"covfefe covfefe");
console.log(covfefe("nothing")); //,"nothing covfefe");
console.log(covfefe("double space ")); //,"double space  covfefe");
console.log(covfefe("covfefe")); //,"covfefe covfefe");
