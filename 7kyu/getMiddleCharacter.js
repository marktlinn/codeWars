/*You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
#Examples:
Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A"
*/

// pseudoCode/plan:
//set an empty variable to receive results
// if string length modulo 2 is zero then we know it's even in size
// set result to the index of string length/2-1 + string length/2
// else it is odd in length and set result to string length/2 rounded down.
//return the result

function getMiddle(s) {
    let result = ''
    if(s.length%2 === 0){
        result = s[s.length/2-1] +s[s.length/2]
    } 
    else {
        result = s[Math.floor(s.length/2)]
    }
    return result
}

console.log(getMiddle('A'))