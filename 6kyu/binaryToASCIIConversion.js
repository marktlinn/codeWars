/*
Link: 
https://www.codewars.com/kata/5583d268479559400d000064/train/javascript
Write a function that takes in a binary string and returns the equivalent decoded text (the text is ASCII encoded).
Each 8 bits on the binary string represent 1 character on the ASCII table.
The input string will always be a valid binary string.
Characters can be in the range from "00000000" to "11111111" (inclusive)
Note: In the case of an empty binary string your function should return an empty string.
\\\\pseudocode/plan////
convert input to string
    if string length is 8, parse string to radix of 2 and return the charCode as a string
    else loop through the string, cutting it into sections of 8 and parsing those sections of 8 into letters from the charCode
*/

function binaryToString(binary) {
    if(binary.length === 8) return String.fromCharCode(parseInt(binary,2));
    let result= ''
    for(let i = 0; i<binary.length; i=i+8){
        const binCode = binary.slice(i,i+8);
        if(binCode){
            result+=String.fromCharCode(parseInt(binCode,2))
        }
    }
    return result
}



console.log(binaryToString('0100100001100101011011000110110001101111'))