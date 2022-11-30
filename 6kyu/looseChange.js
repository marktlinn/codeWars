/*
Link:
https://www.codewars.com/kata/5571f712ddf00b54420000ee/train/javascript
Welcome young Jedi! In this Kata you must create a function that takes an amount of US currency in cents, and returns a dictionary/hash which shows the least amount of coins used to make up that amount. The only coin denominations considered in this exercise are: Pennies (1¢), Nickels (5¢), Dimes (10¢) and Quarters (25¢). Therefor the dictionary returned should contain exactly 4 key/value pairs.
Notes:
    If the function is passed either 0 or a negative number, the function should return the dictionary with all values equal to 0.
    If a float is passed into the function, its value should be rounded down, and the resulting dictionary should never contain fractions of a coin.
Examples
  loose_change(56)    ==>  {'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2}
  loose_change(-435)  ==>  {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}
  loose_change(4.935) ==>  {'Nickels': 0, 'Pennies': 4, 'Dimes': 0, 
\\\\pseudocode////
create an object to hold the various donominations of coins, with values initlised to 0;
if the value of cents is 0 or less, return the object, with empty values
else create a ttl var, to copy cents value (so we don't mutate the data in cents) rounded down
while change is greater than 0
  start deducting money from the ttl starting with the largest denominations e.g. quarters, etc.
  for each deduction increment the value of the key in change that was deducted, e.g. 25 cents removed from ttl, change.Quarters ++.
return change;
*/

function looseChange(cents) {
  const change = { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 };
  if (cents <= 0) return change;
  let ttl = Math.floor(cents);
  while (ttl > 0) {
    const quarter = 25;
    const dime = 10;
    const nickel = 5;
    const penny = 1;
    if (ttl >= quarter) {
      ttl -= quarter;
      change.Quarters++;
    } else if (ttl < quarter && ttl >= dime) {
      ttl -= dime;
      change.Dimes++;
    } else if (ttl < dime && ttl >= nickel) {
      ttl -= nickel;
      change.Nickels++;
    } else if (ttl < nickel && ttl >= penny) {
      ttl -= penny;
      change.Pennies++;
    }
  }
  return change;
}

console.log(looseChange(56), { Nickels: 1, Pennies: 1, Dimes: 0, Quarters: 2 });
console.log(looseChange(100), {
  Nickels: 0,
  Pennies: 0,
  Dimes: 0,
  Quarters: 4,
});
console.log(looseChange(0), { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 });
console.log(looseChange(-3), { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 }); //"no looseChange for -3 cents");
console.log(looseChange(7.9), {
  Nickels: 1,
  Pennies: 2,
  Dimes: 0,
  Quarters: 0,
}); //,"7.9 cents should be rounded down to 7");
