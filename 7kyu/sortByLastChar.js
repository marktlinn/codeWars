/*
Link:
https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0/train/javascript
Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
If two words have the same last letter, they returned array should show them in the order they appeared in the given string.
All inputs will be valid.
\\\\pseudocode////
convert the sting to lowercase
split the string into an array at every space.
    run a sort on the string testing the end chars
    rearrange the array alphabetically accordingly
return sorted array
*/

function last(x){
    return x.toLowerCase().split(' ').sort((a,b)=> a[a.length-1] <b[b.length-1] ? -1 : 1)
}

console.log(last('man i need a taxi up to ubud'))
// console.log(last('what time are we climbing up the volcano'))
// console.log(last('take me to semynak'))