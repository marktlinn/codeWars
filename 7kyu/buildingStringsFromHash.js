/*
Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.
The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.
Example:
solution({a: 1, b: '2'}) // should return "a = 1,b = 2"
*/
//Psuedocode/plan
// break the pairs objects into entries of keys and values.
// each entry is one element of pairs. Map over the elements building a string of the first elem ' = ' the second elem.
// finally join the new elements with ',' and return
function solution(pairs){
    let entries = Object.entries(pairs);
    return entries.map(elem=> elem[0] + ' = ' + elem[1]).join(',')
}


console.log(solution({a: 1, b: '2', c: 4}))