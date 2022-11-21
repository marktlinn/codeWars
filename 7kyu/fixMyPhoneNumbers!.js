/*
Link:
https://www.codewars.com/kata/596343a24489a8b2a00000a2/train/javascript
The Format
Phone numbers are stored as strings and comprise 11 digits, eg '02078834982' and must always start with a 0.
However, something strange has happened and now all of the phone numbers contain lots of random characters, whitespace and some are not phone numbers at all!
    For example, '02078834982' has somehow become 'efRFS:)0207ERGQREG88349F82!' and there are lots more lines that we need to check.
The Task
Given a string, you must decide whether or not it contains a valid phone number. If it does, return the corrected phone number as a string ie. '02078834982' with no whitespace or special characters, else return "Not a phone number".
\\\\pseudocode////
run a regex to only match digits, store the resulting match in a variable isNum
if isNum is null return "Not a phone number"
if isNum is valid and starts with a 0 and has a length of 11 return the number joined;
else return "Not a phone number";
*/

function isItANum(str) {
    const isNum = str.match(/[\d]/ig);
    if(!isNum) return "Not a phone number";
    if(isNum.length === 11 && isNum[0] === '0') return isNum.join('')
    return "Not a phone number"
}

console.log(isItANum("S:)0207ERGQREG88349F82!efRF)"))
console.log(isItANum("sjfniebienvr12312312312ehfWh"))
console.log(isItANum("0192387415456"))
console.log(isItANum("v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165"))
console.log(isItANum("stop calling me no I have never been in an accident"))