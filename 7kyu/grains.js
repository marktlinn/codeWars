/*
Link:
https://www.codewars.com/kata/55f7eb009e6614447b000099/train/javascript
Write a program that calculates the number of grains of wheat on a specific square of chessboard given that the number on each square is double the previous one.
There are 64 squares on a chessboard.
  #Example: square(1) = 1 square(2) = 2 square(3) = 4 square(4) = 8 etc...
Write a program that shows how many grains were on each square.

\\\\pseudocode////
Initialise a ttl var equal to 1, run a for loop from 1 to number,
while i less than number
  ttl = ttl * 2 
return ttl
*/

function square(number) {
  let total = 1;
  for (let i = 1; i < number; i++) {
    total = total * 2;
  }
  return total;
}
