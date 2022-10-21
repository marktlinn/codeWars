/*
Link:
https://www.codewars.com/kata/59f11118a5e129e591000134/train/javascript
In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.
For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.
More examples in the test cases.
Good luck!
\\\pseudocode/plan////
create a map
loop through the digits to test if digit exists in map, 
    if so increment value in map by 1
    else add digit to map with value of 1
create a sum var
loop through map 
    if key has a value less than 2 add it to sum
return sum

*/

function repeats(arr){
    const nums = new Map();
    arr.forEach(digit=> {
        if(nums.has(digit)){
            const numValue = nums.get(digit);
            nums.set(digit, numValue+1)
        }
        else{
            nums.set(digit, 1)
        }
    })
    let sum = 0;
    nums.forEach((value, key)=> {
        if(value<2){
            sum+=key;
        }
    });
    return sum;
};

console.log(repeats([4,5,7,5,4,8]));
console.log(repeats([9, 10, 19, 13, 19, 13]));
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]));
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]));
console.log(repeats([5, 10, 19, 13, 10, 13]));