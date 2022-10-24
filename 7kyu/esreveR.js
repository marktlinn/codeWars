/*
Link:
https://www.codewars.com/kata/5413759479ba273f8100003d/train/javascript
Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)
(the dedicated builtin(s) functionalities are deactivated)
\\\\pseudocode/plan////
Run a for loop starting at the end of the string and decrementing through the indeces. Push each element to a new array and return it
*/

reverse = function(array) {
    const reverser = [];
    for(let i = array.length-1; i>=0; i--){
      reverser.push(array[i]);
    }
    return reverser
}