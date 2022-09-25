/*
Link: 
https://www.codewars.com/kata/5a090c4e697598d0b9000004/train/javascript
In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.
For example:
solve([15,11,10,7,12]) = [15,7,12,10,11]
The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.
More examples in the test cases.
Good luck!
\\\\pseudocode/plan////
declare an empty results array and deep copy arr;
    loop through array
    splice and push max and min from each loop to results
return results
*/

function solve(arr){
    let copyArr = [...arr];
    const results = [];
    while(copyArr.length>0){
        const max = copyArr.splice(copyArr.indexOf(Math.max(...copyArr)), 1)
        const min = copyArr.splice(copyArr.indexOf(Math.min(...copyArr)),1)
        if(max.length>0) results.push(+max)
        if(min.length>0) results.push(+min)
    }
    return results
};

console.log(solve([15,11,10,7,12]))