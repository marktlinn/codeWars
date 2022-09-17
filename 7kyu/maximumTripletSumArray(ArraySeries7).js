/*
Link:
https://www.codewars.com/kata/5aa1bcda373c2eb596000112/train/javascript
Array/list size is at least 3 .
Array/list numbers could be a mixture of positives , negatives and zeros .
Repetition of numbers in the array/list could occur , So (duplications are not included when summing).
Input >> Output Examples
1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)
Explanation:
As the triplet that maximize the sum {6,8,3} in order , their sum is (17)
Note : duplications are not included when summing , (i.e) the numbers added only once

\\\\\Pseudocode/Plan/////
declare empty ttl value of 0
Create a set from the numbers array to remove all duplication.
take the values from that set as an array and loop through
    add the three biggest numbers to the ttl 
return ttl
*/

function maxTriSum(numbers){
    let ttl = 0;
    const setNums = new Set(numbers);
    let setArr = Array.from(setNums.values());
    for(let i = 0; i<3; i++){
        const biggestNum = setArr.splice(setArr.indexOf(Math.max(...setArr)),1)
        ttl+= +biggestNum
    }
    return ttl;
}


console.log(maxTriSum([2,9,13,10,5,2,9,5]))