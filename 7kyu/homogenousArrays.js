/*
Given a two-dimensional array, return a new array which carries over only those arrays from the original, which were not empty and whose items are all of the same type (i.e. homogenous). For simplicity, the arrays inside the array will only contain characters and integers.
Example:
Given [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]], your function should return [[1, 5, 4], ['b']].
\\\\pseudocode////
create an empty variable: result= [];
loop through each array, 
    if the arr is not empty and each element is the same typeof the first element push to result
return result
*/

// function filterHomogenous(arrays) {
//     const result = [];
//     arrays.forEach(arr=> {
//         if(arr.length > 0 && arr.every(elem=> typeof elem === typeof arr[0])){
//             result.push(arr)
//         }})
//     return result;
// }

// more succinctly put with a filter:
function filterHomogenous(arrays) {
    return arrays.filter(arr=> arr.length > 0 && arr.every(elem => typeof elem === typeof arr[0]))
}


console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]))