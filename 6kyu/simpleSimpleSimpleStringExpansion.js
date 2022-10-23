/*
Link: 
https://www.codewars.com/kata/5ae326342f8cbc72220000d2/train/javascript
Given a string that includes alphanumeric characters ("3a4B2d") return the expansion of that string: The numeric values represent the occurrence of each letter preceding that numeric value. There should be no numeric characters in the final string.
Notes
    The first occurrence of a numeric value should be the number of times each character behind it is repeated, until the next numeric value appears
    If there are multiple consecutive numeric characters, only the last one should be used (ignore the previous ones)
    Empty strings should return an empty string.
Your code should be able to work for both lower and capital case letters.
\\\\pseudocode/plan////
declare a var result to be an empty string
declare var repeatNum to equal 1
split and loop over the elements in string.
    if elem is a num, repeatNum = elem;
    else result+= elem repeated the repeatNum times
return result
*/

function stringExpansion(s) {
    let result = '';
    let repeatNum = 1;
    s.split('').forEach(elem=> {
        if(elem.match(/[a-z]/i)){
            result += elem.repeat(repeatNum);
        }
        else{
            repeatNum = +elem;
        }
    });
    return result;
}

console.log(stringExpansion('3abc'))
console.log(stringExpansion('3D2a5d2f'))
console.log(stringExpansion('3d332f2a'))
console.log(stringExpansion('abcde'))
console.log(stringExpansion('a2bcde'))