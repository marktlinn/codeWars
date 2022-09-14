/*
Link:
https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/javascript?collection=playing-with-lists-slash-arrays
Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product ,   5*2 + 3*4 = 22
\\\\\\\\Pseudocode/plan///////
Deep Copy the original array so we don't mutate the data
create a var for holding the new multiplied elements
    loop through the array
        while index is > the array's length
        splice the max and min values from the array
        times them together and push them to our holding array
    reduce the sum holding to get the sum of all elements and return
*/

function minSum(arr) {
    let arrCopy = [...arr];
    const sumHole = [];
    let index = 0;
    while(index<=arr.length){
        const maxVal = arrCopy.splice(arrCopy.indexOf(Math.max(...arrCopy)), 1)
        const minVal = arrCopy.splice(arrCopy.indexOf(Math.min(...arrCopy)), 1)
        sumHole.push(maxVal * minVal)
        index++
    }
    return sumHole.reduce((a,b)=> a+b)
} 

console.log(minSum([9,2,8,7,5,4,0,6]))
// minSum({9,2,8,7,5,4,0,6}) ==> return (74)
// Explanation:
// The minimum sum obtained from summing each two integers product ,   9*0 + 8*2 +7*4 +6*5 = 74