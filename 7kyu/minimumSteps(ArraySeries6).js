/*
Link:
https://www.codewars.com/kata/5a91a7c5fd8c061367000002/train/javascript
Task
Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.
Notes:
List size is at least 3.
All numbers will be positive.
Numbers could occur more than once , (Duplications may exist).
Threshold K will always be reachable.
Input >> Output Examples
minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)
Explanation:
We add two smallest elements (1 + 2), their sum is 3 .
Then we add the next smallest number to it (3 + 3) , so the sum becomes 6 .
Now the result is greater or equal to 6 , Hence the output is (2) i.e (2) operations are required to do this.

\\\\\\\Pseudocode/plan///////
Sort the array in ascending order
create a count var and a ttl
    loop through the array
        each loop add current num to ttl and increment the count by one
        if the ttl is >= value return the count, this way we are counting the number of loops we've added to ttl
*/


function minimumSteps(numbers, value){
    const sortedNums = numbers.sort((a,b)=>a-b)
    let count = 0;
    let ttl = 0;
    for(let num of sortedNums){
        ttl += num
        if(ttl >= value) return count
        count++
    }
}

console.log(minimumSteps([ 1, 1, 2, 2, 3, 3, 7, 8, 10, 32, 51, 52, 65, 66, 77, 82, 88, 89 ], 637))
