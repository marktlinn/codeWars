/*
Link:
https://www.codewars.com/kata/55147ff29cd40b43c600058b/train/javascript
Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1", then the second letter from the left and the second letter to the right and "2", and so on.
If the string's length is odd drop the central element.
For example:
  charConcat("abcdef")    == 'af1be2cd3'
  charConcat("abc!def")   == 'af1be2cd3' // same result
*/

/*
Pseudocode:
Create a result string
Get the length of the string: end
if odd, store the length / 2 in a var

loop through the string
  if current index is not the odd var
    take the first and last element and append the index + 1, add to result string.
    decrement end var
return result string
*/


function charConcat(string){
  let result = '';
  let end = string.length-1;
  let odd = null;
  if(string.length%2 !== 0){
    odd = Math.floor(end/2);
  }
  for(let i = 0; i<end; i++){
    if(i !== odd){
      result += `${string[i]}${string[end]}${i+1}`
      end--
    }
  }
  return result
}