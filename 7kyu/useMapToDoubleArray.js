/*
Link:
https://www.codewars.com/kata/53951fff369894e4f10007a9/train/javascript
Make the double() function return a new array with each value twice as large as the corresponding value in the passed in array. Your solution must use the map() function of the built-in javascript Array object. If you're not familiar with map(), reading over the documentation may help.
\\\\ pseudocode/plan ////
just map over the elements and * 2 each element.
This Kata should be an 8kyu imo
*/

function double(array) {
    return array.map(elem=> elem*2)
}