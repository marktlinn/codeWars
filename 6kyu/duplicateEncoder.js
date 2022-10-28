/*The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
Examples
"dind"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
\\\\pseudocode/plan////
Convert the word to lowercase, then split it and map over the elements
    If the indexOf the elem is the lastIndexOf that elem return '('
    else return ')'
join and return the result
*/
function duplicateEncode(word){
    const wrd = word.toLowerCase()
    return wrd.split('').map(elem=> {
        if(wrd.indexOf(elem)===wrd.lastIndexOf(elem)){
            return '('
        }
        else{
            return ')'
        }
    }).join('')
}

console.log(duplicateEncode('IIwITHIIIv)IIIeaIQG'))
// '))()(()))(()))(()(('