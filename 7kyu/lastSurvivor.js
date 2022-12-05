/*
Link:
https://www.codewars.com/kata/609eee71109f860006c377d1/train/javascript
You are given a string of letters and an array of numbers.
The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
After each removal the size of the string decreases (there is no empty space).
Return the only letter left.
Example:
let str = "zbk", arr = [0, 1]
    str = "bk", arr = [1]
    str = "b", arr = []
    return 'b'
Notes
    The given string will never be empty.
    The length of the array is always one less than the length of the string.
    All numbers are valid.
    There can be duplicate letters and numbers.
\\\\pseudocode////
treat the incoming string like an array: spread it into an array on function invocation.
treat coords array as an inverse stack, put it in a loop
While coords is not null
  splice letters at the index of the first element in coords
  then shift() to remove the first element from coords
return letters as a string
***This was a quick code challenge, not concerned with mutating trhe origianl data, in production I'll likely store letters in a separate array varible and not splice and mutate the date***
*/

function lastSurvivor([...letters], coords) {
  while (coords.length > 0) {
    let toRemove = coords[0];
    coords.shift();
    letters.splice(toRemove, 1);
  }
  return String(letters);
}

console.log(lastSurvivor("zbk", [2, 1]));
