// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

function incrementString (strng) {
    if(isNaN(strng[strng.length-1])) return strng.concat(1);
    const endNums = strng.split('').filter(elem => !isNaN(elem) || elem== 0);
    const parsedNums = Number(endNums.join(''))+1;
    const cutOff = endNums.length;
    const newString = strng.slice(0,strng.indexOf(endNums[0]));
    if(cutOff> String(parsedNums).length) return newString + '0'.repeat(cutOff-Number(String(parsedNums).length)).concat(parsedNums)
    return newString.concat(parsedNums)
}

  console.log(incrementString('foobar010'))