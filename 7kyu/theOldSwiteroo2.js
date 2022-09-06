/*Write the function :
function encode(str)
that takes in a string str and replaces all the letters with their respective positions in the English alphabet.
encode('abc') == '123'   // a is 1st in English alpabet, b is 2nd and c is 3rd
encode('codewars') == '315452311819'
encode('abc-#@5') == '123-#@5'
**String are case sensitive**

\\\\\\\\////////

Pseudocode/plan
create an  newString var
Create an object containing each letter of the alphabet with its value as the position number
loop through the string, test each element against the object to see if it exists, if so add the value to the empty string var
*/

function encode(str) {
    let newString = '';
    const alphabet = {
        a:1, b:2, c:3, d:4, e: 5, f:6, g:7, h:8, i:9, j:10, k:11, l:12, m:13, n:14, o:15, p:16,
        q:17, r:18, s:19, t:20, u:21, v:22, w:23, x:24, y:25, z:26 
    };
    for(let letter of str.toLowerCase()){
        if(alphabet[letter]){
            newString += alphabet[letter]
        }
        else {
            newString+= letter
        }
    }
    return newString;
}

console.log(encode('abc')) //'123';
console.log(encode('ABCD')) //'1234';
console.log(encode('ZzzzZ')) //'2626262626';