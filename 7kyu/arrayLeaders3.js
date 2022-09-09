/*
Task
Given an array/list [] of integers , Find all the LEADERS in the array.
Notes
Array/list size is at least 3 .
Array/list's numbers Will be mixture of positives , negatives and zeros
Repetition of numbers in the array/list could occur.
Returned Array/list should store the leading numbers in the same order in the original array/list .
\\\\\\\\Pseudocode/plan///////
if array = 0; return [];
create var for leadingNumbers
create a sum function:
    slice array from a starting index.
    reduce the sliced string to a sum
Loop through the array
    test whether elem at current index is greater than the sum from that index.
    if so push elem to leadingNumbers
finally if last index is greater than zero push that digit to leadingNumbers and return
*/

function sum(arr){
    return arr.reduce((prev, curr)=> prev+curr)
}

function arrayLeaders(numbers){
    if(numbers.length=== 0) return [];
    const leaderStore = [];
    let index = 0;
    while(numbers[index+1] || numbers[index+1] === 0){
        if(numbers[index] > sum(numbers.slice(index+1))){
            leaderStore.push(numbers[index]);
        }
        index++
    }
    if(numbers[numbers.length-1] >0){
        leaderStore.push(numbers[numbers.length-1])
    }
    return leaderStore
}


