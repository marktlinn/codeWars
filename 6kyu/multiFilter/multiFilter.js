/*
Link: 
https://www.codewars.com/kata/56a298b27e9e994977000023/train/javascript
Write a function called multiFilter which receives a variable number of filter functions. The function should return a function that receives one element (a compound filter function).
That is, if we have two functions:
function isEven(el){
  return el % 2 === 0;
}
and
function isGTten(el){
  return el > 10;
}
then
[1,2,3,4,10,11,12,20,21,22].filter(multiFilter(isEven, isGTten));
should return [12,20,22]

\\\\pseudocode////
Spread the arguments coming into the array
then inside that return a new function, 
  which will have as its arguments all the arguments that are given to the original filter method which has been called on the array
    i.e. it will contain the (elem, index, array) arguments from the filter((elem,index,array))
  take the number (elem) part and run the filterFunctions that were taken frmo the arguments,
  check if the num meets the criteria of every filterFunc
    if so return true
    else false
The original filter function will recieve the boolean and then either filter or return the number given as that specific element (at that specific index) in the array.
*/

function isEven(el) {
  return el % 2 === 0;
}

function isOdd(el) {
  return el % 2 !== 0;
}

function isGTten(el) {
  return el > 10;
}

function multiFilter(...filterFuncs) {
  return num => filterFuncs.every(filterFunc => filterFunc(num));
}

const arr = [1, 2, 3, 4, 10, 11, 12, 20, 21, 22];
console.log(arr.filter(multiFilter(isEven, isGTten)));

module.exports = { multiFilter, isGTten, isEven, isOdd };
