/*
Link:
https://www.codewars.com/kata/567de72e8b3621b3c300000b/train/javascript/642ff817e00c71d75f1f1bd9

Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise.
*/

/*
Pseudocode:
Check the length of this, 
if one check if it is a-z (case-insensitive) return true
else return false
*/

String.prototype.isLetter = function () {
  if (this.length === 1 && /[a-zA-Z]/.test(this)) {
    return true;
  }
  return false;
};

module.exports = String;
