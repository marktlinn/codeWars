/*
Link:
https://www.codewars.com/kata/525821ce8e7b0d240b002615/train/javascript

You must create a method that can convert a string from any format into PascalCase. This must support symbols too.
Don't presume the separators too much or you could be surprised.
For example: (Input --> Output)
  "example name" --> "ExampleName"
  "your-NaMe-here" --> "YourNameHere"
  "testing ABC" --> "TestingAbc"

\\\\pseudocode////
create a boolean switch to record if a non letter or unmber is found, init at false false
loop through thed string
  convert it to lowercase and split
  map the elements
    if elem === [a-z09] and the bool = false return the elem
    else if elem === [a-z09] & bool = true
      reset the bool to false and reutnr the elem in Uppercase
    else set bool to true
    join the map
if the map's result is truthy
  return the map with the first letter capitalised
  else return the result as it is.
*/

function camelize(str) {
  let convertNextLetterToPascal = false;
  const resultStr = str
    .toLowerCase()
    .split("")
    .map(elem => {
      if (elem.match(/[a-z0-9]/) && convertNextLetterToPascal === false) {
        return elem;
      } else if (elem.match(/[a-z0-9]/) && convertNextLetterToPascal === true) {
        convertNextLetterToPascal = false;
        return elem.toUpperCase();
      } else {
        convertNextLetterToPascal = true;
      }
    })
    .join("");

  return resultStr
    ? resultStr[0].toUpperCase() + resultStr.slice(1)
    : resultStr;
}
