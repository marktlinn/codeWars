/*
Link:
https://www.codewars.com/kata/580741302e14acaef900015a/train/javascript
Given a text, for example:
const inputText = "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";
get an array of last names of people named Michael. The result should be:
["Jordan", "Johnson", "Green", "Wood"]
Notes:
    First name will always be Michael with upper case 'M'.
    There will always be a space character between 'Michael' and last name.
    Last name will always be one word, starting with an upper-case letter and continuing with lower-case letters.
    There will always be at least one 'Micheal' with a valid last name in the input text.
\\\\pseudocode/plan////
search through the text for a word starting with an uppercase M
    if the following word starts with an uppercase, parse and store that word in a variable
    continue this throughout the string and return the variable store
*/

const inputText = "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";

function getMichaelLastName(inputText) {
    const splitText= inputText.split(' ');
    const surnames = [];
    let mWord = false;
    splitText.forEach(word=> {
        if(mWord === true && word[0].match(/[A-Z]/)){
            let name = '';
            name += word.split('').filter(letter=> letter.match(/[a-z]/gi)).join('')
            surnames.push(name)
            mWord = false;
        }
        if(word.includes('Michael')){
            mWord = true;
        }
        else mWord = false
    })
    return surnames
}

console.log(getMichaelLastName(inputText))