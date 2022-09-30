/*
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].
The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.
For example (Input --> Output):
[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]

\\\\pseudocode/plan////
deep copy the array
declare a var for the oldest, spice the copied array at the index of its highest value
declare a vary to follow the same process as the above to get the secondhighest value
return the above two arrays, spread within an array
*/


function twoOldestAges(ages){
    let copyAges = [...ages];
    const oldest = copyAges.splice(copyAges.indexOf(Math.max(...copyAges)), 1);
    const secondOldest = copyAges.splice(copyAges.indexOf(Math.max(...copyAges)),1)
    return [...secondOldest, ...oldest]
}

console.log(twoOldestAges([1,5,87,45,8,8]))