/*
Link:
https://www.codewars.com/kata/58e0f0bf92d04ccf0a000010/train/javascript
Every Friday and Saturday night, farmer counts amount of sheep returned back to his farm (sheep returned on Friday stay and don't leave for a weekend).
Sheep return in groups each of the days -> you will be given two arrays with these numbers (one for Friday and one for Saturday night). Entries are always positive ints, higher than zero.
Farmer knows the total amount of sheep, this is a third parameter. You need to return the amount of sheep lost (not returned to the farm) after final sheep counting on Saturday.
Example 1: Input: {1, 2}, {3, 4}, 15 --> Output: 5
Example 2: Input: {3, 1, 2}, {4, 5}, 21 --> Output: 6
\\\\pseudocode////
if friday and saturday are empty, return total.
    else spread firday and saturday into one array and reduce them to get a sum. 
    minus that sum from total and return the result
*/

function lostSheep(friday,saturday,total){
    if(friday.length === 0 && saturday.length === 0) return total;
    return total - ([...friday, ...saturday].reduce((ttl, curr)=> ttl+curr));
}

console.log(lostSheep([1,2],[3,4], 15))
console.log(lostSheep([3,1,2],[4,5], 21))