/*
Link:
https://www.codewars.com/kata/539de388a540db7fec000642/train/javascript

Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
Examples:
  checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
  checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

\\\\pseudocode////
convert the current and expiration into JS dates
if the valid date - the given date yield a positive result check the two codes match
  if so return true, else return false
else return false
*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  const validDate = new Date(expirationDate);
  const givenData = new Date(currentDate);
  if (validDate - givenData >= 0) {
    return enteredCode === correctCode ? true : false;
  }
  return false;
}

console.log(checkCoupon("123", "123", "September 5, 2014", "October 1, 2014")); //, true);
console.log(checkCoupon("123a", "123", "September 5, 2014", "October 1, 2014")); //, false)
