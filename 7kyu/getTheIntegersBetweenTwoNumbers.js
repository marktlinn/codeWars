/*
Link:
https://www.codewars.com/kata/598057c8d95a04f33f00004e/train/javascript
Build a function that can get all the integers between two given numbers.
Example:
(2,9)
Should give you this output back:
[ 3, 4, 5, 6, 7, 8 ]
If startNum is the same as endNum, return an empty array.
\\\\pseudocode////
create an empty array var
just run a for loop from start to finish num
push each value to the array var and return it
*/

function range(startNum, endNum){  
    const arr = [];
    for(let i = startNum+1; i<endNum; i++){
        arr.push(i)
    }
    return arr;
};  
  
console.log(range(2,9))
console.log(range(6,8))
console.log(range(2,9))
