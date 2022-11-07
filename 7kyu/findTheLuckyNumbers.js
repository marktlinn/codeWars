/*
Link:
https://www.codewars.com/kata/580435ab150cca22650001fb/train/javascript
Write a function filterLucky/filter_lucky() that accepts a list of integers and filters the list to only include the elements that contain the digit 7.
For example,
ghci> filterLucky [1,2,3,4,5,6,7,68,69,70,15,17]
[7,70,17]
Don't worry about bad input, you will always receive a finite list of integers.
\\\\pseudocode////
create an empty arr = luckyNums
loop over each element in the array as a string and check if it includes '7'
    if the elem includes '7' add it to the arr
return the arr
*/

const filterLucky=x=>{
    return x.filter(elem=> String(elem).includes('7'))
}

console.log( filterLucky([1,2,3,4,5,6,7,68,69,70,15,17]))
console.log(filterLucky([71,9907,69]))