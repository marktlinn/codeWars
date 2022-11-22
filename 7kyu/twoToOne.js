/*
Link:
https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
Examples:
    a = "xyaabbbccccdefww"
    b = "xxxxyyyyabklmopq"
    longest(a, b) -> "abcdefklmopqwxy"
    a = "abcdefghijklmnopqrstuvwxyz"
    longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
\\\\pseudocode////
create an empty string: resultStr
split and loop over each variable s1 and s2 to see if each elem is included in the see if the elem is included in resultStr, if not add it
sort, join and return the resultStr
Although not stated in the challenge all the output is sorted so must be sorted alphabetically
*/

function longest(s1, s2) {
    let resultStr = [];
    s1.split('').map(elem=> resultStr.includes(elem)? null : resultStr.push(elem));
    s2.split('').map(elem=> resultStr.includes(elem)? null : resultStr.push(elem));
    return resultStr.sort().join('')
}