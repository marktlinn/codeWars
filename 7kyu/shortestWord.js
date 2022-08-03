/*Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/

// pseudocode/plan
// split the string into separate words, and map over it to return the word lengths
// Math.min to find the smallest value in the array of numbers and return it.

function findShort(s){
    const nums = s.split(' ').map(word=> Number(word.length))
    return Math.min(...nums)
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))