/*Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b keeping their order.*/

// First solution:
// function arrayDiff(a, b) {
//     if(b.length <1) {
//         return a;
//     } else {
//         const filteredArr = [];
//         a.filter(num => {
//             if(b.indexOf(num) === -1) {
//                 filteredArr.push(num)
//             }
//         })
//         return filteredArr;
//     }
// }

//A more elegant solution.
function arrayDiff(a, b) {
    return a.filter(num => !b.includes(num))
}
