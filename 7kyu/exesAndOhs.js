/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
Examples input/output:
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

/*
Pseudocode/plan
create two count variables one for x's one for o's
loop through string, if letter == x, increment count x, likewise for o
if count x == count o return true, else false.
*/

function XO(str) {
    let xs = 0
    let os = 0
    for(let letter of str){
        if(letter.match(/x/gi)) xs++
        if(letter.match(/o/gi)) os++
    }
    return os == xs ? true : false;
}

console.log(XO('xo'));
console.log(XO("Oo"));
console.log(XO("ooom"));