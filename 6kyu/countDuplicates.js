/*Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
*/
//Pseudocode: plan
// create a variable to store the count i.e. count
// create a map to store key:value pairs
// convert the string to lowercase and split it into an array of letters
// iterate through the string check if the letter is in the map
// If it is not, add it to the map with the value 1
// If it does exist and the value is 1 add 1 to count and add 1 to value of letter in map
// if the value is more than 1 ignore the value and pass to the next element
// This was a nice practice of using Hashmaps and producing nicely performant code.

function duplicateCount(text){
    let result = 0;
    const hashMap = new Map()
    text.toLowerCase().split('').forEach(elem=> {
        if(hashMap.has(elem) && hashMap.get(elem) === 1){
            result++
            hashMap.set(elem, 2)
        }
        else if (!hashMap.has(elem)){
            hashMap.set(elem, 1)
        }
    })
    return result
}

console.log(duplicateCount("Indivisibilities"))