/*
n this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.
For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.


Pseudocode/plan
split the string into pieces at each point where there are letters using regex
map over array, remove white space and return only the number elements in the array.
run and return a max() ooperator on the array.
*/

function solve(s){
    let justNums = s.split(/[a-z]/gi).filter(elem=> elem !=='')
    return Math.max(...justNums)
};

console.log(solve("gh12cdy695m1"))