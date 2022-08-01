/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.
Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string ) 
*/

//PseudoCode - plan:
// declare a variable as an object of the alphabet, with their place number as their value
// declare a result variable to hold an array.
// convert the string to lowercase and split it to remove any empty space
// Next loop through the string and compare each letter to the items in the key; if it's not there don't return ''
// return the result joined to form it into strings

function alphabetPosition(text) {
    const alphabet ={ a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9, j:10, k:11, l:12, m:13, n:14, o:15, p:16, q:17, r:18, s:19, t:20, u:21, v:22, w:23, x:24, y:25, z:26}
    
    const result = [];
    text.toLowerCase().split('').forEach(letter=> {
        alphabet.hasOwnProperty(letter)? result.push(alphabet[letter]): ''
    })
    return result.join(' ')
  }

  console.log(alphabetPosition('the sun sets at ten'))