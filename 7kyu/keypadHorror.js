/*
Link:
https://www.codewars.com/kata/5572392fee5b0180480001ae/train/javascript

Having two standards for a keypad layout is inconvenient!
Computer keypad's layout:
  7 8 9 \n 4 5 6 \n 1 2 3 \n 0 \n
Cell phone keypad's layout:
  1 2 3\n 4 5 6\n 7 8 9\n 0\n
Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.
Example:
  "789" -> "123"
Notes:
You get a string with numbers only

\\\\pseudocode////
make an object: keys are the keypad layout from a computer num pad, mapped to values that are the phone's keys in the same position.

split and loop through the string of nums, and return the value of each key where element === key
join and return the map.
*/

function computerToPhone(numbers) {
  const keypad = {
    0: 0,
    1: 7,
    2: 8,
    3: 9,
    4: 4,
    5: 5,
    6: 6,
    7: 1,
    8: 2,
    9: 3,
  };

  return numbers
    .split("")
    .map(elem => keypad[elem])
    .join("");
}
