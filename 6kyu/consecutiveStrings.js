/*
You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2
Concatenate the consecutive strings of strarr by 2, we get:
treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".
*/

//PseudoCode/plan:
// set an index variable to 0
// create a newStrArr to hold new string values
// while index less than strarr.length loop from index to k elements in the strarr
// each value at each index should be combined and added to newStrrArr as a new object element: the key the letters and the value the length of the string of letters
// increment index by value of k with each loop
// To return the first element in the new array with the value we can't use sort as it's not stable in version of node used for the challenge
// instead we can declare a variable for an array of all the values from the newStrArr.
// find the maximum value
// then to find the first newly formed string with a length == to the maximum value
// loop through the newStrArr, if an element has the length == maximum value return it.

const stringsArr = [ 'it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz' ]

function longestConsec(strarr, k) {
    if(!strarr || k> strarr.length) return '';
    if(strarr.length === k) return strarr.join('')
    let index = 0;
    const newStrArr = {};
    while(k <= strarr.length){
        let stringThing = ''
        for(let i = index; i<k; i++){
            stringThing += strarr[i];
        }
        newStrArr[stringThing] = stringThing.length;
        k ++
        index ++
        stringThing = '';
    }
    const totalValues = Object.values(newStrArr)
    const maxLength =  Math.max(...totalValues)
    for(let elem in newStrArr){
        if(elem.length == maxLength){
            return elem;
        }
    }
}

console.log(longestConsec(stringsArr, 2))
