/*Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples:
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway ! */

//pseudoCode/plan
// first split the string into individual words.
//loop through each word slicing the word from index 1 to the end and adding the 0 index + 'ay' to word
// return the new string as a string

function pigIt(str){
    return str.split(' ').map(word=> {
        if(word.match(/[a-z]/ig)){
            const newWord = word.slice(1) + word[0] + 'ay'
            return newWord
        } 
        else{
            return word
        }
    }, '').join(' ')
}

console.log(pigIt('Pig latin is cool !'))

// ==> 'igPay atinlay siay oolcay'