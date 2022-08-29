/*Write a function that takes a piece of text in the form of a string and returns the letter frequency count for the text. This count excludes numbers, spaces and all punctuation marks. Upper and lower case versions of a character are equivalent and the result should all be in lowercase.
The function should return a list of tuples (in Python and Haskell) or arrays (in other languages) sorted by the most frequent letters first. The Rust implementation should return an ordered BTreeMap. Letters with the same frequency are ordered alphabetically. For example:

letterFrequency('aaAabb dddDD hhcc')      

===>> [['d',5], ['a',4], ['b',2], ['c',2], ['h',2]]
*/

//PseudoCode/plan
// First  convet to lowercase, replace all spaces and split the text to remove spaces and ensure uniformity of text.
// Then use reduce to iterate over the array of characters
// check:
// if an object exists with that key, if so increment it's value by one
// else create a new object with that value and set it's value to 1
// return the objects as an array of entries, sorted by their value

function letterFrequency(text){
        const strArr= text.toLowerCase().split('').filter(elem=> elem.match(/[a-z]/gm))
        const result = strArr.reduce((tally,items)=> {
            tally[items] = (tally[items] || 0)+1;
            return tally
        }, {});
        const resultArr = Object.entries(result).sort()
        console.log(resultArr)
        return resultArr.sort((a,b)=> b[1]-a[1]);
}

console.log(letterFrequency('dddaaaaaa bbbbbbb eeeeeee ccccccc f'))