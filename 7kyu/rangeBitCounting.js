/*
Link:
Range Bit Counting 
Task:
You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct an array of all the integers from a to b inclusive. You need to count the number of 1s in the binary representations of all the numbers in the array.
Example
    For a = 2 and b = 7, the output should be 11
    Given a = 2 and b = 7 the array is: [2, 3, 4, 5, 6, 7]. Converting the numbers to binary, we get [10, 11, 100, 101, 110, 111], which contains 1 + 2 + 1 + 2 + 2 + 3 = 11 1s.
\\\\pseudocode////
create a variable to store a count = ''
loop from a to b converting each integer to a binary and adding it to the count
finally return the count with all '0''s removed
*/
//This is the code used to pass the challenge, as the node version didn't accept .replaceAll()
// function rangeBitCount(a, b) {
//     let count = '';
//     for(let i = a; i<=b; i++){
//         count+= i.toString(2);
//     }
//     return count.split('0').join('').length
// }

//This is how I would have done it to avoid using bot split and join and to make the code a little cleaner.
function rangeBitCount(a, b) {
    let count = '';
    for(let i = a; i<=b; i++){
        count+= i.toString(2);
    }
    return count.replaceAll('0','').length
}
console.log(rangeBitCount(2,7)) 
// 11

console.log(rangeBitCount(0,1)) 
// 1

console.log(rangeBitCount(4,4)) 
// 1