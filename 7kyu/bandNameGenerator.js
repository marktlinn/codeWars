/*
Link:
https://www.codewars.com/kata/59727ff285281a44e3000011/train/javascript
My friend wants a new band name for her band. She like bands that use the formula: "The" + a noun with the first letter capitalized, for example:
"dolphin" -> "The Dolphin"
However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word (WITHOUT "The" in front), like this:
"alaska" -> "Alaskalaska"
Complete the function that takes a noun as a string, and returns her preferred band name written as a string.
\\\\pseudocode/plan////
convert the whole string to lowercase
    if the str is empty return null
    if the 1st and last are equal conver the first letter to uppercase and return a slice of the str from index 1 repeated twice
    otherwise return return 'The Str' with the first letter uppercase and the remainder of the string sliced and appended to that uppercase letter
*/

function bandNameGenerator(str) {
    modStr = str.toLowerCase();
    if(modStr.length <1) return null;
    if(modStr[0] === modStr[modStr.length-1]) return modStr[0].toUpperCase() + modStr.slice(1).repeat(2)
    return `The ${str[0].toUpperCase() + str.slice(1)}`
} 

console.log(bandNameGenerator('knife'))
console.log(bandNameGenerator('tart'))
console.log(bandNameGenerator('sandles'))
console.log(bandNameGenerator('bed'))
console.log(bandNameGenerator('Alaska'))