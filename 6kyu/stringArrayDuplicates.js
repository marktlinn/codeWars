/*
Link:
https://www.codewars.com/kata/59f08f89a5e129c543000069/train/javascript
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.
For example:
dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
dup(["kelless","keenness"]) = ["keles","kenes"].
Strings will be lowercase only, no spaces. See test cases for more examples
\\\\pseudocode////
loop over the array given to access the individual strings
split the string and loop over the elements, test whether elem = elem at previous index, if so ignore the elem, else return the elem
*/
function dup(s) {
    return s.map(str=> str.split('').filter((elem, index)=>  elem !== str[index-1]).join(''))
};

console.log(dup(["ccooddddddewwwaaaaarrrrsssss","hubbubbubboo"]));
console.log(dup(["abracadabra","allottee","assessee"]));
console.log(dup(["kelless","keenness"]));
console.log(dup(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"]));
console.log(dup(["adanac","soonness","toolless","ppellee"]));
console.log(dup(["callalloo","feelless","heelless"]));