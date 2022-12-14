/*
Link:
https://www.codewars.com/kata/639918bef003910b2146d0b8/javascript
Task test to see if Strict Mdoe is enabled
\\\\explanation////
if Strict mode is enables the use of this caleld globally = undefined, a falsy value. So by calling the opposite of this, we receive the boolean value of true, to signify strict mode is active.
If strict mode isn't active, this will return a value that is not undefined and thus truthy, so the opposite will be returned (false) to signify strict mode is not active.
*/

function isInStrictMode() {
  return !this;
}
