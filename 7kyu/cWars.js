/*
Link:
https://www.codewars.com/kata/55968ab32cf633c3f8000008/train/javascript
Normally we have firstname, middle and the last name but there may be more than one word in a name like a South Indian one.
Similar to those kinda names we need to initialize the names.
See the pattern below:
  initials('code wars') => returns C.Wars 
  initials('Barack Hussain obama') => returns B.H.Obama 
Complete the function initials.
Names are separated by exactly one space in the input, without leading or trailing spaces. Names will always be lowercase, except optionally their first letter.

\\\\pseudocode////
initialise a var to an empty string: name.
split the string at each space and loop through the elements
  if index is less than number of elements-1
    add the current element with the first letter to capital followed by "." to name
  else if equal to index return elem toUpperCase + a slice of the remaining string to name.
return name
*/

function initials(n) {
  let name = "";
  n.split(" ").forEach((elem, i) => {
    if (i < n.split(" ").length - 1) {
      name += `${elem[0].toUpperCase()}.`;
    } else {
      name += `${elem[0].toUpperCase()}${elem.slice(1)}`;
    }
  });
  return name;
}
