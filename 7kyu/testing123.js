/*
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
Write a function which takes a list of strings and returns each line prepended by the correct number.
The numbering starts at 1. The format is n: string. Notice the colon and space in between.
Examples: (Input --> Output)
[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/

//PseudoCode/plan
//Map over the elements in the array, return the element prefixed by the index plus 1;
// this will give us an initial count of 1 for the first element as the zero index will be incremented by one.

const number=function(array){
    return array.map((elem,ind)=> `${ind+1}: ${elem}`)
}

console.log(number(["a", "b", "c"]))