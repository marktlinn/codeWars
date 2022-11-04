/* 
Link:
https://www.codewars.com/kata/57fb017d9610ce369a0006ac/train/javascript
Description:
Remove or add a exclamation mark at the end of words of the sentence. Words are separated by spaces in the sentence. That is: If a word has one ! at the end, remove it; If a word has no ! at the end, add a ! to the end; If there are more than one ! at the end of word, keep it.
Examples
removeOrAdd("Hi!") === "Hi"
removeOrAdd("Hi! Hi!") === "Hi Hi"
removeOrAdd("Hi! Hi") === "Hi Hi!"
removeOrAdd("Hi! Hi Hi!!") === "Hi Hi! Hi!!"
removeOrAdd("!Hi! !Hi !Hi!!") === "!Hi !Hi! !Hi!!"
\\\\pseudocode////
split the string at every space.
loop over the word elements and check: 
    if the last two chars are '!!', if so ignore it
    else the last two cahrs are not '!!', but the last chars is '!' remove it
    else if the last char is not '!', append a '!' to the elem.
return the new elems as a string
*/

function removeOrAdd (string) {
    const str = string.split(' ');
    return str.map(elem=> {
        if(elem.slice(-2)=== '!!'){
            return elem;
        }
        else if (elem.slice(-2) !== '!!' && elem.slice(-1) === '!'){
            return elem.slice(0, -1)
        }
        else {
            return `${elem}!`
        }
    }).join(' ')
}

console.log(removeOrAdd("Hi!"))
console.log(removeOrAdd("Hi! Hi!"))
console.log(removeOrAdd("Hi! Hi"))
console.log(removeOrAdd("Hi! Hi Hi!!"))
console.log(removeOrAdd("!Hi! !Hi !Hi!!"))