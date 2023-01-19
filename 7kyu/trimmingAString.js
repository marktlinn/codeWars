/*
Link: 
https://www.codewars.com/kata/563fb342f47611dae800003c/train/javascript

Return a function that will trim a string (the first argument given) if it is longer than the maximum string length (the second argument given). The result should also end with "..."
These dots at the end also add to the string length.
So in the above example, trim("Creating kata is fun", 14) should return "Creating ka..."
If the string is smaller than or equal to 3 characters then the length of the dots is not added to the string length.
  e.g. trim("He", 1) should return "H..."
If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.
  e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"

\\\\pseudocode////
if the size >= the string length just return the string.
else if size is smaller than three return a slice of the string from start to size with three dots added
else return a slice of the string from start to size -3 with three dots added
*/

function trim(str, size) {
  if (size >= str.length) return str;

  if (size <= 3) {
    return `${str.slice(0, size)}...`;
  } else {
    return `${str.slice(0, size - 3)}...`;
  }
}
