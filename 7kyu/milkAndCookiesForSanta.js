/*Link:
https://www.codewars.com/kata/52af7bf41f5a1291a6000025/train/javascript
Complete the function function that accepts a Date object, and returns true if it's Christmas Eve (December 24th), false otherwise.
Keep in mind Javascript's Date month is 0 based!
Examples
  timeForMilkAndCookies(new Date(2013, 11, 24))  // true
  timeForMilkAndCookies(new Date(2013, 0, 23))   // false
  timeForMilkAndCookies(new Date(3000, 11, 24))  // true
\\\\pseudocode////
*/

function timeForMilkAndCookies(date) {
  const month = new Date(date).getMonth();
  const day = new Date(date).getDate();
  if (day === 24 && month === 11) return true;
  return false;
}

console.log(timeForMilkAndCookies(new Date(2013, 11, 24))); // true
console.log(timeForMilkAndCookies(new Date(2013, 0, 23))); // false
console.log(timeForMilkAndCookies(new Date(3000, 11, 24))); // true
