// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

//pseudocode/plan:
//split the strings at either - or _
//loop through the different words, 
//if word index is not 0 first letter to uppercase append the rest of the elem to the word
// if index 0, return the elem as it is
//join the elements together
//return as a string

function toCamelCase(str){
    let mutantStr = str
    if(str.includes('-')) {
        mutantStr = mutantStr.split('-')
    }   
    else{
        mutantStr = mutantStr.split('_')
    }
    return mutantStr.map((elem,index)=> {
        if(index >=1){
           return elem = elem.slice(0,1).toUpperCase() + elem.slice(1)
        }
        else {
            return elem
        }
    }).join('')
}

console.log(toCamelCase('The_Stealth_Warrior'))