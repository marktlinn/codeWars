/*
Your job is to figure out the index of which vowel is missing from a given string:
A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.
Examples
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

//////// Pseudocode/plan \\\\\\\\
the passed string will basically include all vowels except one, so we just need to find which one isn't present and return the appropriate number.
To do so we'll use regex, to try and match each letter, if the letter isn't present we'll return the number
Use a switch case to try and match the indidual vowels within the string
*/

function absentVowel(x){
    switch(true){
        case !x.match(/a/):
            return 0
            break;
            case !x.match(/e/):
            return 1
            break;
            case !x.match(/i/):
            return 2
            break;
            case !x.match(/o/):
            return 3
            break;
            case !x.match(/u/):
            return 4
            break;
    }
}

console.log(absentVowel("John Doe hs seven red pples under his bsket"))
