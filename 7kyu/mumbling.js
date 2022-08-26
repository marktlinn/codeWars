/*This time no story, no theory. The examples below show you how to write function accum:
Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.*/

//PseudoCode/plan
// create a variable to hold the input string converted to lowercase, to ensure uniformity and preservation of data
// initialisean empty newString variable
// initialise a count at 0
// loop through the letters of the string
// add the letters to newString with the first element toUpperCase and repeat the letter according to the count then add the '-' dash
// increment the count with each iteration.
// return the newString removing the trialing '-' from it.

function accum(s) {
    let str = s.toLowerCase();
    let newString = '';
    let count = 0;
    for(let elem of str){
        newString += elem.toUpperCase() +elem.repeat(count) + '-';
        count++
    }
    return newString.slice(0, newString.length-1)
}

console.log(accum('abcd'));