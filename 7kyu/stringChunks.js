/*
Link:
https://www.codewars.com/kata/55b4f9906ac454650900007d/train/javascript
You should write a function that takes a string and a positive integer n, splits the string into parts of length n and returns them in an array. It is ok for the last element to have less than n characters.
If n is not a number or not a valid size (> 0) (or is absent), you should return an empty array.
If n is greater than the length of the string, you should return an array with the only element being the same string.
Examples:
  stringChunk('codewars', 2) // ['co', 'de', 'wa', 'rs']
  stringChunk('thiskataeasy', 4) // ['this', 'kata', 'easy']
  stringChunk('hello world', 3) // ['hel', 'lo ', 'wor', 'ld']
  stringChunk('sunny day', 0) // []
*/

/*
Pseudocode:
Decalre an empy var Array
if n is greater than 0
  loop over the string from i (init at 0) to n, slicing the string and pushing that slice to the array
  increment i by n with each iteration
return the Array
*/

function stringChunk(str, n) {
  let resultArr = [];
  if(n>0){
    for (let i = 0; i < str.length; i += n){
      resultArr.push(str.slice(i,i+n))
    }
  }
  return resultArr
}

console.log(stringChunk("codewars", 2))