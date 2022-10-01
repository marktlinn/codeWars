/*
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.
Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
\\\\pseudocode/plan////
declare a new object for a: 0, b: 0, c: 0
loop through the array if elem of the array matches the object key, increment the object value by one
    if a, or b, or c have the value 3 and a, b or c have the value 2 return true
*/

function checkThreeAndTwo(array) {
    const a={a:0}, b={b:0}, c={c:0}
    array.forEach(elem=> {
        if(elem == 'a'){
            a[elem] = a[elem] + 1;
        }
        else if (elem == 'b'){
            b[elem] = b[elem] +1;
        }
        else {
            c[elem] = c[elem] +1;
        }
    })
    if((a['a']===3 || b['b']===3 || c['c']===3) && (a['a']===2 || b['b']===2 || c['c']===2)){
        return true
    }
    return false
}

console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"]))