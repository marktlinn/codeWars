/*
Task
Given an array/list [] of integers , Find the Nth smallest element in this array of integers
Notes
Array/list size is at least 3 .
Array/list's numbers could be a mixture of positives , negatives and zeros .
Repetition in array/list's numbers could occur , so don't Remove Duplications .
Input >> Output Examples
nthSmallest({3,1,2} ,2) ==> return (2) 
Explanation:
Since the passed number is 2 , Then * the second smallest element in this array/list is 2*
nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
Explanation:
Since the passed number is 3 , Then * the third smallest element in this array/list is 7*

\\\\\\\\Pseudocode/Plan////////

declare var for results = [], var arrCopy for deep copy of arr
loop through deep copy
    while the length of results is less than the pos searched for
        Math.min and splice the smallest element from arrCopy and push it to results
    return the last element of results, removed from the array, as a number.
*/

function nthSmallest(arr, pos){
    const arrCopy = [...arr];
    const results = [];
    while(results.length<pos){
        const smallestValue = arrCopy.splice(arrCopy.indexOf(Math.min(...arrCopy)), 1);
        results.push(smallestValue)
    }

    return +results[results.length-1].join('');
}

console.log(nthSmallest([3,1,2],2))
