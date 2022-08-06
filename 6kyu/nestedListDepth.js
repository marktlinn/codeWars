/*A nested list (or array in JavaScript) is a list that apears as a value inside another list,
[item, item, [item, item], item]
in the above list, [item, item] is a nested list.
Your goal is to write a function that determines the depth of the deepest nested list within a given list.
return 1 if there are no nested lists. The list passed to your function can contain any data types.
A few examples:
arrayDepth([true]) // returns 1
arrayDepth([]) // returns 1
arrayDepth([2, "yes", [true, false]]) // returns 2
arrayDepth([1, [2, [3, [4, [5, [6], 5], 4], 3], 2], 1]) // returns 6
arrayDepth([2.0, [2, 0], 3.7, [3, 7], 6.7, [6, 7]]) // returns 2
*/

//PseudoCode/plan
//declare a result variable to count the lists
//Check if the current item passed to the function is an array?
//If so, loop through the array by element. Is element an instance of array?
//if so add 1 to count and recursively call the function again on the array from that index
// finally return result


// original answer:

// function arrayDepth(array){
//     result = 0;
//     if(array instanceof Array){
//         for(let elem in array){
//             if(arrayDepth(array[elem])> result){
//                 result = arrayDepth(array[elem])
//             } result ++
//         } 
//     }
//     return result
// }


// improved version based on some research using Math.max function for the calculations.

function arrayDepth(array) {
    let result = 0;
    if(array instanceof Array){
        for(let elem in array){
            result = Math.max(result, arrayDepth(array[elem]))
            console.log(result, elem)
        }
        result++
    }
    return result
}



console.log(arrayDepth([100, [2,[3,[4,[5,[6,[7,[8,[9,[100]]]]]]]]]]))