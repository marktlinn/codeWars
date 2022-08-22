/*
Create a function that takes an array of letters, and combines them into words in a sentence.
The function should combine all the 0th indexed letters to create the word 'just', all the 1st indexed letters to create the word 'live', etc.
Shorter words will have an empty string in the place once the word has already been mapped out (see the last element in the last element in the array).
e.g.:
arrAdder([
['J','L','L','M'],
['u','i','i','a'],
['s','v','f','n'],
['t','e','e','']
]) // => "Just Live Life Man"
*/

//PseudoCode/plan:
//set a count variable to use for loops, and a str variable to hold values passed to it
// while the count is less than the length of the array we want to loop through each element which itself is an array.
// with each loop we want to pass the same index from each element in the parent array.
// so with count set to zero we loop through each element and pass to the str variable the sub-element at the index count
// this is done for each element.
// when each loop finished a space is added to str to create a space between words and the count is incremented.
// finally return the str trimmed of whitespace.


const testArr = [
    ['J','L','L','M'],
    ['u','i','i','a'],
    ['s','v','f','n'],
    ['t','e','e','']
]

function arrAdder(arr) {
    count = 0;
    let str = '';
    while(count< testArr[0].length){
        for(let i = 0; i < arr.length; i++){
            str+= arr[i][count]
        }
        str += ' '
        count++
    }
    return str.trim()
}

console.log(arrAdder(testArr))