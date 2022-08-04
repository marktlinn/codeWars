/*Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.
Example:
For input: [3, 4, 4, 3, 6, 3]
remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3]*/


//PseudoCode/plan
//create a set. Because we want to retain the last digits in the array, we'll reverse the array.
// loop through and add each element to the set, which will remove all duplicates.
// convert the set into an array and return it reversed back to it's original order.

function solve(arr) {
    const setter = new Set()
    arr.reverse().forEach(num=> setter.add(num))
    return Array.from(setter).reverse()
}

  console.log(solve([3,4,4,3,6,3]))

  //[4,6,3]