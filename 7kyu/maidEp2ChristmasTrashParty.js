/*
Link: https://www.codewars.com/kata/639df18a29d4991916ba5cdd/train/javascript
You will receive trash1 and trash2, that might be the next values:
[], false, '', new Array(), null, NaN, undefined, 0, -0, 0n, -0n, '0'
You have to return a boolean if they are strictly equal.
However
The Prince says when He was young, there weren't softies who were afraid to get their hands dirty, so He doesn't let His employees use gloves for work (triple equals === and strict inequality !== are not allowed).

\\\\pseudocode////
As triple equals can't be used we have to use double equals, but they perform type conversion.
So, first test whether the two inputs are equal
  if so, check whether their types are equal
    if so, return true
In all other cases return false.
*/

function compareTrash(trash1, trash2) {
  if (trash1 == trash2) {
    return typeof trash1 == typeof trash2 ? true : false;
  }
  return false;
}
