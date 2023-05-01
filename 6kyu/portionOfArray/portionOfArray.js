/*
Link: https://www.codewars.com/kata/598e3859f289bb47ba00000a

You will be given an Array(a), starting position (i) and number of portion to return (n) . Your task is to return n portion of the array (a) starting from position (i). The starting position could be negative, in that case you should start counting reverse direction till you get all your n portion. In case you can not find the exact n portion of elements counting from the starting position i or the starting position i is out of the index of the array, you should return -1 (throw an ArgumentOutOfRangeException in C#).

example:
function p([1,2,3,4],1,2)
 should return [2,3]
how ?
 Array => [1,2,3,4]
           | | | |
 index =>  0 1 2 3
 portion     |_|   => [2,3]
 
function p([1,2,3,4],-1,2)
 should return [2,3]
how ?
  Array => [1,  2,  3, 4]
            |   |   |  |
  index=>   -3 -2  -1  0
  portion=>     |___|      =>[2,3]    

function p([1],1,5)
 should return -1

how ? 
  Array => [1]
            | 
  index=>   0
required starting index =>1 , which does not exist so we return -1


*/

/*
Pseudocode:
if "i" is positive take and store a slice of arr from index i to i+n;
  if the slice's length is equal to "n" return the slice
  else return -1
else if "i" is negative reverse the process
  take and store a slice of the array from point (i-n) to point (i-n) + n
    if the slice's length is equal to "n" return the slice
    else return -1
*/

function portion(a, i, n) {
  if (i >= 0) {
    const section = a.slice(i, n + i);
    return section.length < n ? -1 : section;
  } else {
    const startIndex = i - n;
    const endIndex = startIndex + n;
    const section = a.slice(startIndex, endIndex);
    return section;
  }
}

console.log(portion([1, 2, 3, 4], -1, 2));

module.exports = portion;
