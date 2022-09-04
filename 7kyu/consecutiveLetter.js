/*
In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.
Rules are: (1) the letters are adjacent in the English alphabet, and (2) each letter occurs only once.
For example: 
solve("abc") = True, because it contains a,b,c
solve("abd") = False, because a, b, d are not consecutive/adjacent in the alphabet, and c is missing.
solve("dabc") = True, because it contains a, b, c, d
solve("abbc") = False, because b does not occur once.
solve("v") = True
All inputs will be lowercase letters.

\\\\\pseudocode/plan/////////
Create an alphabet string a-z in order
loop through the string and test each index to ensure it matches the same index in the alphabet array
If the stirng doesn't have the exact same order return false and break out of the loop, else true.
*/

function solve(s){
    let sortedStr = s.split('').sort().join('')
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let startLetter = alphabet.indexOf(sortedStr[0]);
    let index = 0;
    console.log(sortedStr[index], sortedStr[0],  alphabet[startLetter])
    while(index<s.length){
        if(sortedStr[index] !== alphabet[startLetter]) return false
        startLetter++
        index++
    }
    return true
}

console.log(solve("bcde"))
