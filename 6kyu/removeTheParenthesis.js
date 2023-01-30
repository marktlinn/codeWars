/*
Link:
https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8/train/javascript
Remove the parentheses
In this kata you are given a string for example:
  "example(unwanted thing)example"
Your task is to remove everything inside the parentheses as well as the parentheses themselves.
The example above would return:
  "exampleexample"
Notes
  Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
  There can be multiple parentheses.
  The parentheses can be nested.

\\\\pseudocode////
Use a switch to be triggered each time a parenthesis is openned. As the parentheses can be nested a boolean can't be used. So a count instead.

set a count var init at 0
loop through the string
  if elem === "(" increment count
  else if === ")" decrement count
  if count = 0 and elem not === ")" return elem
return the map/loop
 */

function removeParentheses(s) {
  let openParenthesis = 0;
  return s
    .split("")
    .map(elem => {
      if (elem === "(") {
        openParenthesis++;
      } else if (elem === ")") {
        openParenthesis--;
      }
      if (openParenthesis === 0) {
        return elem !== ")" ? elem : null;
      }
    })
    .join("");
}
