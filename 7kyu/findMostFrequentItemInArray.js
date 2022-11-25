/*
Link: https://www.codewars.com/kata/56582133c932d8239900002e/train/javascript
Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0
Example
input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
ouptut: 5 
The most frequent number in the array is -1 and it occurs 5 times.
\\\\pseudocode////
create an object to store values
loop through the array, 
    if obj has the property key of that num, increment value by 1
    else create key of that num and set value to 1;
Run a Math.max of the values of the obj to get the highest num and return it.
*/

function mostFrequentItemCount(collection) {
    if(collection.length === 0) return 0;
    const obj = {};
    collection.forEach(digit=> obj.hasOwnProperty(digit) ? obj[digit]++: obj[digit] = 1);
    return Math.max(...Object.values(obj))
}

console.log(mostFrequentItemCount([3, -1, -1]));
console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]));