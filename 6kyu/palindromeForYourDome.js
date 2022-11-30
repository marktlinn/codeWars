/*
Link:
https://www.codewars.com/kata/53046ceefe87e4905e00072a/train/javascript
A palindrome is a word, phrase, number, or other sequence of symbols or elements, whose meaning may be interpreted the same way in either forward or reverse direction. Famous examples include "Amore, Roma", "A man, a plan, a canal: Panama" and "No 'x' in 'Nixon'". - wikipedia
Our goal is to determine whether or not a given string is a valid palindrome or not.
Like the above examples, here are a few test cases which are also populated:
  "Amore, Roma" => valid
  "A man, a plan, a canal: Panama" => valid
  "No 'x' in 'Nixon'" => valid
  "Abba Zabba, you're my only friend" => invalid
You can see that they are case insensitive and disregards non alphanumeric characters. In addition to a few predefined tests, your function will also be tested against a random string generator 50 times which are guaranteed to produce valid palindromes.
Notes:
The empty string "" can be read forward or backward the same, it's a palindrome in our case.
\\\\pseudocode////
Check if the string's length is less than or equal to 1, if so return true.
create a var to store a modified copy of the string. Split it, filter it for non-alphanumeric characters.
  if the reduced string's length is not even return true.
  else join and convert reduced string to lowerCase 
    compare to reduced string reversed, joined and toLowerCase
      if equal return true
      else return false
*/

function palindrome(string) {
  if (string.length <= 1) return true;
  const reducedStr = string.split("").filter((elem) => elem.match(/\w/));
  if (reducedStr.length % 2 !== 0) return true;
  return reducedStr.join("").toLowerCase() ===
    reducedStr.reverse().join("").toLowerCase()
    ? true
    : false;
}
