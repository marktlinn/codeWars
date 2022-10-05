/*
Link:
https://www.codewars.com/kata/5966847f4025872c7d00015b/train/javascript
You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:
"zero nine five two" -> "four"
If the string is empty or includes a number greater than 9, return "n/a"
\\\\pseudocode/plan////
if str empty return 'n/a'
create object of number strings to number digit pairs.
declare a sum var and initialise at 0
declare numStr = split the str into words 
loop through the numStr
    use words in numStr to match the keys in number object
        if they match, add value of key to sum
        else return 'n/a'
average = sum / the length of numStr
Loop through the object keys to return the key at the number value average
*/

function averageString(str) {
    if(str === '') return 'n/a';
    const numObj = {zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine:9};
    let sum = 0;
    const numStr = str.split(' ');
    for(let num of numStr){
        if(num in numObj){
            sum+= numObj[num]
        }else {
            return 'n/a'
        }
    }
    const average = Math.floor(sum/numStr.length);
    return Object.keys(numObj)[average]
}


console.log(averageString("zero nine five two four six two three"))