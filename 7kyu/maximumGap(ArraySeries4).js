/* 
https://www.codewars.com/kata/5a7893ef0025e9eb50000013/train/javascript
Task
Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.
Notes
Array/list size is at least 3 .
Array/list's numbers Will be mixture of positives and negatives also zeros_
Repetition of numbers in the array/list could occur.
The Maximum Gap is computed Regardless the sign.
Input >> Output Examples
maxGap ({13,10,5,2,9}) ==> return (4)
Explanation:
The Maximum Gap after sorting the array is 4 , The difference between  9 - 5 = 4.

\\\\\\\Pseudocode/plan///////
sort the array into descending order
then loop through the array
    for each two elements subtract the higher number from the smaller to be left with the difference
    check if the difference exists, for odd numbered arrays it won't necessarily
    pass the difference to an array
Check the maximum result, if -Inifinity return 0;
else return maximum
*/

function maxGap (numbers){
    let sortedNums = numbers.sort((a,b)=> b-a);
    const results = []
    for(let i = 0; i<numbers.length; i+=1){
        const  gap = sortedNums[i] - sortedNums[i+1]
        if(gap){
            results.push(gap)
        }
    }
    if(Math.max(...results) === -Infinity){
        return 0
    }
    else return Math.max(...results)
}

console.log(maxGap([-65039, -42081, 95761]))
