/*
Link: 
https://www.codewars.com/kata/57fb142297e0860073000064/train/javascript
Description:
Count the number of exclamation marks and question marks, return the product.
Examples
  Product("") == 0
  product("!") == 0
  Product("!ab? ?") == 2
  Product("!!") == 0
  Product("!??") == 2
  Product("!???") == 3
  Product("!!!??") == 6
  Product("!!!???") == 9
  Product("!???!!") == 9
  Product("!????!!!?") == 20

\\\\pseudocode////
create vars to hold a count for each symbol "?" or "!"
loop over the strings and increment the vars as appropriate
return the product of the two vars.
*/

function product(string) {
  let qs = 0;
  let ex = 0;
  string.split("").forEach(elem => {
    if (elem.match(/[!]/)) {
      ex++;
    } else if (elem.match(/[?]/)) {
      qs++;
    }
  });
  return qs * ex;
}
