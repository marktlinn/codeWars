/*
Link: 
https://www.codewars.com/kata/5558cc216a7a231ac9000022/train/javascript
Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.
Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).
Examples
[1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
[0, 1, 2, 3, 4, 5]                ==>  [
\\\\pseudocode/plan////
create an empty map and an empty array
loop through the array
    if map has item push to array
    else add item to map and set value to 0
return a new set from the results array, converting the keys to an array. This will remove all duplicates.
*/
function duplicates(arr) {
    const numHolder = new Map();
    const result = []
    arr.forEach(item=> {
        return numHolder.has(item)? result.push(item) : numHolder.set(item, 0)
    })
    const removeDuplicates = new Set(result).keys();
    return Array.from(removeDuplicates)
}

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5']))
