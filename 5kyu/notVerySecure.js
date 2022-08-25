/*
In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.
The string has the following conditions to be alphanumeric:
At least one character ("" is not valid)
Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
No whitespaces / underscore
*/

//PseudoCode/plan
// First check if the string is falsy, if so return false
// split the string, and then loop over each element checking each element: is it alphanumeric or not
// if any element is not alphanumeric return false.
// else, if no non-alphanumeric elements are found after the loop finishes return true.

function alphanumeric(string){
    if(!string) return false;
    let alphaNum = string.split('');
    for(let elem of alphaNum){
        if(!elem.match(/[A-Za-z0-9]/)){
            return false;
        }
    }
    return true;
}

console.log(alphanumeric('_'))