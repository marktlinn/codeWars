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
//  finally return the first object in the new array with the highest value.

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
    const sortedResult = Object.entries(newStrArr).sort((a,b)=> {
        if(b[1]>a[1]) return 1
        if(b[1]<a[1]) return -1
        if(a[0]>b[0]) return 1
        if(a[0]<b[0]) return -1
    })
    return sortedResult[0][0]
}

console.log(longestConsec(stringsArr, 2))
