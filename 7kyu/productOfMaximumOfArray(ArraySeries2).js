/*
Link:
https://www.codewars.com/kata/5a63948acadebff56f000018/train/javascript
Task
Given an array/list [] of integers , Find the product of the k maximal numbers.
Notes
Array/list size is at least 3 .
Array/list's numbers Will be mixture of positives , negatives and zeros
Repetition of numbers in the array/list could occur.
Input >> Output Examples
maxProduct ({4, 3, 5}, 2) ==>  return (20)
Explanation:
Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .
maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720)
Explanation:
Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is  8 * 9 * 10 = 720 .

\\\\\\\Pseudocode/plan///////
create deep copy of number Array = arrCopy
declare var for results = [];
loop through arrCopy
    while results.length less than size
        splice the maximum digit from arrCopy and push it to results
    return product of the elements of results as a number
*/

function maxProduct(numbers, size){
    const arrCopy = [...numbers];
    const results = [];
    while(results.length<size){
        const largestDigit = arrCopy.splice(arrCopy.indexOf(Math.max(...arrCopy)), 1)
        results.push(largestDigit)
    }
    return +results.reduce((ttl, curr)=> ttl*curr)
}

console.log(maxProduct([4,3,5], 2))