/*
Link:
https://www.codewars.com/kata/581e014b55f2c52bb00000f8/train/javascript
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:
For each word:
    the second and the last letter is switched (e.g. Hello becomes Holle)
    the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces
Examples
  decipherThis('72olle 103doo 100ya'); // 'Hello good day'
  decipherThis('82yade 115te 103o'); // 'Ready set go'

\\\\pseudocode////
Declare a auxiliary function to loop over a word
  store all numbers in one var and all letters in a different var
  decode the number into a letter from it's charCode.
    if the decoded letter + letters var have a length > 2
      return the decoded letter + the string with the 1st and last index swapped
    else if the string var is not empty
      return the decoded letter var + the string
    else return the decoded letter var only

for each individual word in the string,
  •split the words into characters and run the auxiliary function over each element
  • return the result joined
*/

function parseNumsForLetters(word) {
  let nums = "";
  let string = "";
  for (const elem of word) {
    if (elem.match(/[0-9]/)) {
      nums += elem;
    } else if (elem.match(/[a-z]/gi)) {
      string += elem;
    }
  }
  const decodedNum = String.fromCharCode(+nums);

  if (decodedNum.length + string.length > 2) {
    const secondLet = string[0];
    const lastLet = string[string.length - 1];

    const decodedString =
      lastLet + string.slice(1, string.length - 1) + secondLet;
    return decodedNum + decodedString;
  }

  return string !== "" ? decodedNum + string : decodedNum;
}

function decipherThis(str) {
  return str
    .split(" ")
    .map((elem, i) => `${parseNumsForLetters(elem)}`)
    .join(" ");
}

console.log(
  decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o")
);
// ("Have a go at this and see how you do");

module.exports = { decipherThis, parseNumsForLetters };
