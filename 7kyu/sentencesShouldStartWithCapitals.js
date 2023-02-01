/*
Link:
https://www.codewars.com/kata/5bf774a81505a7413400006a/train/javascript
In English, all words at the begining of a sentence should begin with a capital letter.
You will be given a paragraph that does not use capital letters. Your job is to capitalise the first letter of the first word of each sentence.
For example,
  input:
  "hello. my name is inigo montoya. you killed my father. prepare to die."
  output:
  "Hello. My name is inigo montoya. You killed my father. Prepare to die."
  You may assume:
      there will be no punctuation besides full stops and spaces
      all but the last full stop will be followed by a space and at least one word

\\\\pseudocode////
Create a switch boolean to change when a fullstop is encountered init at true
loop through the paragraph.
  if elem is a letter 
    if fullstop is true switch it to false and return elem in upperCase
    else return the elem as it is
  else if the current elem is a "." switch fullstop to true and return elem
  else return elem as it is
return the resulting string.
*/

function fix(paragraph) {
  let fullStop = true;
  return paragraph
    .split("")
    .map(elem => {
      if (elem.match(/[a-z]/i)) {
        if (fullStop === true) {
          fullStop = false;
          return elem.toUpperCase();
        } else {
          return elem;
        }
      } else if (elem === ".") {
        fullStop = true;
        return elem;
      } else return elem;
    })
    .join("");
}

console.log(
  fix("hello. my name is inigo montoya. you killed my father. prepare to die.")
); //"Hello. My name is inigo montoya. You killed my father. Prepare to die.")
