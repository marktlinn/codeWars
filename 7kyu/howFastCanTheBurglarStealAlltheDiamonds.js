/*
Link:
https://www.codewars.com/kata/63a15a3511e6e70023e7d0d3/train/javascript

A stealthy burglar is causing a big headache for people in a town. He is known to be swift in getting in the house unnoticed and steal all the diamonds from the locker. He holds a bag in one hand and picks the diamonds from other hand, while stealing.
Kata
Your objective - if choose to accept - is to calculate and return an integer representing the minimum number of repetitions required for the burglar to pick all the diamonds from the locker.
Input
locker - An array of strings representing a single locker. The length of the array will be between 1 - 10 (inclusive): 1 <= locker <= 10.

['*.*.*.*.*.',
 '...*..**..',
 '**.**...*.',
 '**..**..**']
Every item indicates a row and has a length of exact 10
Notations:
. = An empty space
* = A Diamond!
Useful Info
    The burglar steals a single diamond every time but can steal two if diamonds are horizontally adjacent to each other.
    The burglar cannot steal more than two diamonds at once.
    A row in the locker can have 0 diamonds.
    The locker will have at least 1 diamond in it.
    All the inputs are valid.
Example
  `locker` array:
  ['*.*.*.*.*.',
  '...*..**..',
  '**.**...*.',
  '**..**..**']
From top:
    1st row - burglar needs 5 repetitions
    2nd row - needs only 2 repetitions, because both 2nd and 3rd diamond can be grabbed at once since they are horizontally adjacent.
    3rd row - needs 3 repetitions
    4th row - needs 3 repetitions

\\\\pseudocode////
join and split the array to remove all '.'s
  reduce the remaining
    for elements less than 2 which are not empty ttl++
    else if current element.length greater than 2 round up the length of the element / 2 and add to ttl
    return ttl from reduce
return the reduction.
*/

function diamondBurglar(locker) {
  const lockers = locker.join(".").split(".");
  return lockers.reduce((ttl, curr) => {
    if (curr.length <= 2 && curr !== "") {
      ttl++;
    } else if (curr.length > 2) {
      // console.log(Math.ceil(curr.length / 2));
      ttl += Math.ceil(curr.length / 2);
    }
    return ttl;
  }, 0);
}

console.log(
  diamondBurglar(["*.*.*.*.*.", "...*..**..", "**.**...*.", "**..**..**"])
); //, 12);

console.log(diamondBurglar(["..*.*.*...", ".**.*.*.**", "*........*"])); //, 9);

console.log(
  diamondBurglar([
    "..*....*..",
    "....*.....",
    "*...**....",
    "..**....**",
    "..**..**.*",
    ".*.*.*.**.",
  ])
); //, 14);
