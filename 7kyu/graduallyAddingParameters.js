/*
Link:
https://www.codewars.com/kata/555b73a81a6285b6ce000047/train/javascript
You will create a function named add. This function will return the sum of all the arguments. Sounds easy, doesn't it??
Well here's the twist. The inputs will gradually increase with their index as parameter to the function.
  add(3,4,5); 
  returns ( 3 * 1 ) + ( 4 * 2 ) + ( 5 * 3 ) = 26
Remember the function will return 0 if no arguments are passed
\\\\pseudcode////
Spread the arguments being received by the function
Declare a result variable to = 0
loop through the arguments supplied to the function with each iteration:
  add the argument at current index * the index + 1 to result
return result
*/
function add(...args) {
  if (args.length === 0) return 0;
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result += args[i] * (i + 1);
  }
  return result;
}
