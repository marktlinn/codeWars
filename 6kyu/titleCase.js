/*
Link:
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

Examples:
  titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
  titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
  titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

\\\\pseudocode////
create var secondWord to hold minorWords  split by spaces, or if undefined '';
Initialise a variable with a copy of the title string
  the first letter to upperCase
  all others to lowercase
split at each space and map over the copy string
  if the index is greater than 0 and the current element is not included in secondWord
    return elem with the 0th index to upperCase
  else
    return the element as is
join and return the map result.
*/

function titleCase(title, minorWords) {
  if (!title) return "";
  const secondWord = minorWords ? minorWords.toLowerCase().split(" ") : "";
  const lowTitle = title[0].toUpperCase() + title.slice(1).toLowerCase();
  return lowTitle
    .split(" ")
    .map((elem, index) => {
      if (index > 0) {
        return !secondWord.includes(elem)
          ? elem[0].toUpperCase() + elem.slice(1)
          : elem;
      } else return elem;
    })
    .join(" ");
}

console.log(titleCase("")); //, '')
console.log(titleCase("a clash of KINGS", "a an the of")); //, 'A Clash of Kings')
console.log(titleCase("THE WIND IN THE WILLOWS", "The In")); //, 'The Wind in the Willows')
console.log(titleCase("the quick brown fox")); //, 'The Quick Brown Fox')
console.log(titleCase("a Bc", "bc")); //, 'a bc')
console.log(titleCase("First a of in", "an often into")); //, 'First A Of In')
