/*
Link:
https://www.codewars.com/kata/5546180ca783b6d2d5000062/train/javascript
Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.
Examples
2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]
\\\\pseudocode/plan////
if either x or n are less than zero return an empty array
create a result var = []
intialise var currentNum = x
run a loop for n iterations
    on each iteration push current num to result 
    set currentNum = currentNum squared
return result
*/

function squares(x, n) {
if(x <0 || n< 0) return [];
const result = [];
let currentNum = x;
    for(let i = 0; i<n; i++){
        result.push(currentNum);
        currentNum = currentNum**2;
    }
    return result
}

console.log((squares(2,5)));
//=> [2,4,16,256,65536] 