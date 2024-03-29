/*
Link: 
https://www.codewars.com/kata/58880c6e79a0a3e459000004
Task
A boy is walking a long way from school to his home. To make the walk more fun he decides to add up all the numbers of the houses that he passes by during his walk. Unfortunately, not all of the houses have numbers written on them, and on top of that the boy is regularly taking turns to change streets, so the numbers don't appear to him in any particular order.
At some point during the walk the boy encounters a house with number 0 written on it, which surprises him so much that he stops adding numbers to his total right after seeing that house.
For the given sequence of houses determine the sum that the boy will get. It is guaranteed that there will always be at least one 0 house on the path.
Example
For inputArray = [5, 1, 2, 3, 0, 1, 5, 0, 2], the output should be 11.
The answer was obtained as 5 + 1 + 2 + 3 = 11.
\\\\pseudocode/plan////
create an empty var to equal 0
loop through the inputArray
    if the number is 0 break out of the loop
    else add the number to the count
return the count.
*/

function houseNumbersSum(inputArray) {
    let count = 0;
    for (let num of inputArray){
        if(num === 0) break;
        count+=num;
    }
    return count;
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]))