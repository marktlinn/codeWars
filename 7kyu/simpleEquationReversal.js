/*
Link: 
https://www.codewars.com/kata/5aa3af22ba1bb5209f000037/javascript

Given a mathematical equation that has *,+,-,/, reverse it as follows:
solve("100*b/y") = "y/b*100"
solve("a+b-c/d*30") = "30*d/c-b+a"

\\\\pseudocode////
split the input at any of the specific symbols given to form an array of equation parts
reverse the array and join it
return the result
*/

function solve(eq) {
  return eq
    .split(/([*+-/])/)
    .reverse()
    .join("");
}
