/*
Link:
https://www.codewars.com/kata/5418a1dd6d8216e18a0012b2/train/javascript
In this Kata, you will implement the Luhn Algorithm, which is used to help validate credit card numbers.
Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.
Here is the algorithm:
    Double every other digit, scanning from right to left, starting from the second digit (from the right).
    Another way to think about it is: if there are an even number of digits, double every other digit starting with the first; if there are an odd number of digits, double every other digit starting with the second:
    1714 ==> [1*, 7, 1*, 4] ==> [2, 7, 2, 4]
    12345 ==> [1, 2*, 3, 4*, 5] ==> [1, 4, 3, 8, 5]
    891 ==> [8, 9*, 1] ==> [8, 18, 1]
    If a resulting number is greater than 9, replace it with the sum of its own digits (which is the same as subtracting 9 from it):
[8, 18*, 1] ==> [8, (1+8), 1] ==> [8, 9, 1]
or:
[8, 18*, 1] ==> [8, (18-9), 1] ==> [8, 9, 1]
    Sum all of the final digits:
    [8, 9, 1] ==> 8 + 9 + 1 = 18
    Finally, take that sum and divide it by 10. If the remainder equals zero, the original credit card number is valid.
    18 (modulus) 10 ==> 8 , which is not equal to 0, so this is not a valid credit card number
\\\\psuedocode////
split the string and declare a varible to track iterations (i) = 0.
convert the num to a string 
  if the resulting length is even set i to = 1
map over the card details
  if index is equal to i increase double value and increment i by 2. 
    If the value is greater than 9 subtrack nine
    else return value
  else return value as num.
finally, reduced the result of the map and check if the result is divisible by 10
  if it is divisible without a remaineder return true
  else return false.
*/

function validate(n) {
  const numbers = String(n);
  let i = 0;
  if (numbers.length % 2 !== 0) {
    i = 1;
  }
  const mappedCard = numbers.split("").map((elem, index) => {
    if (index === i) {
      const increasedValue = +elem * 2;
      i += 2;
      return increasedValue > 9 ? increasedValue - 9 : increasedValue;
    }
    return +elem;
  });
  return mappedCard.reduce((prev, curr) => prev + curr) % 10 === 0
    ? true
    : false;
}

console.log(validate(123)); //, false);
console.log(validate(1)); //, false);
console.log(validate(2121)); //, true);
console.log(validate(1230)); //, true);
