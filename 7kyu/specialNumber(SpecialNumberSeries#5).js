/*
Link:
https://www.codewars.com/kata/5a55f04be6be383a50000187/train/javascript

number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5
Given a number determine if it special number or not . 
Notes
    The number passed will be positive (N > 0) .
    All single-digit numbers within the interval [1:5] are considered as special number.
Input >> Output Examples
specialNumber(2) ==> return "Special!!"
Explanation:
It's a single-digit number within the interval [1:5] .
specialNumber(9) ==> return "NOT!!"
\\\\Pseudocode/code////
convert n to a string and split it, check that every element === either 0,1,2,3,4 or 5.
    if so return 'Special!'
    else return 'NOT!!'
*/



function specialNumber(n){
    return String(n).split('').every(elem=> elem<=5)? 'Special!' : 'NOT!!'
}

console.log(specialNumber(122344453721))