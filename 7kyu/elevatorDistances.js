/*
Link:
https://www.codewars.com/kata/59f061773e532d0c87000d16/train/javascript
Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor. You have travelled a total of 3 + 6 = 9 floors of distance.
Given an array representing a series of floors you must reach by elevator, return an integer representing the total distance travelled for visiting each floor in the array in order.
    // simple examples
    elevatorDistance([5,2,8]) = 9
    elevatorDistance([1,2,3]) = 2
    elevatorDistance([7,1,7,1]) = 18
// if two consecutive floors are the same,
//distance travelled between them is 0
    elevatorDistance([3,3]) = 0
\\\\pseudocode////
create arr for differences
loop through the array
compare elem to next elem
while the elem after the current elem in the array is a number:
    if elem greater than nextElem, push nextElem - elem to arr
    if elem less than nextElem, push elem - nextElem to arr
reduce the differnces arr and return the sum.
*/

function elevatorDistance(array) {
    const differences =[];
    let i = 1;
    for(let elem of array){
        if(!isNaN(array[i])){
            elem<array[i] ? 
            differences.push(array[i]-elem) :
            differences.push(elem-array[i])
        }
        i++;
    }
    return differences.reduce((pre,cur)=> pre+cur)
}

console.log(elevatorDistance([5,2,8]))
console.log(elevatorDistance([1,2,3]))
console.log(elevatorDistance([7,1,7,1]))