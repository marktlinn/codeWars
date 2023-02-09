/*
Link:
https://www.codewars.com/kata/5a2cb4bff28b820c33000082/train/javascript
I am the father of three wonderful sons. before the beginning of the school year, I promised them that I would buy a bicycle for someone who would bring the best marks at the end of the school year. it's time to keep promises and I count on you.
You have 3 input objects(school diaries) with school subjects and marks (1-10). For example:
{
  'algebra': 6,
  'history': 8,
  'physics': 9,
  'geography': 2,
  'chemistry': 9
}
Return please :
'I need to buy a bicycle for my first son.' // the sum of the marks is the highest  in the first diary.
'I need to buy a bicycle for my second son.' // the sum of the marks is the highest in the second diary.
'I need to buy a bicycle for my third son.' //  the sum of the marks is the highest in the third diary.
If two or three sons have the same highest marks, you need to choose the younger one. Use the age table which is constant and preloaded:
const ageTable = {
                  'firstSonAge': 14,
                  'secondSonAge': 9,
                  'thirdSonAge': 8
                }
\\\\pseudocode////
take the values from the three different objects and reduce the values to get the sum of each stored in three variables
find the max number and test against each var, starting with diary 3 for teh toungest son. Return the appropriate phrase when a match for the max number is found.
*/

function whoseBicycle(diary1, diary2, diary3) {
  const d1 = Object.values(diary1).reduce((ttl, cur) => ttl + cur);
  const d2 = Object.values(diary2).reduce((ttl, cur) => ttl + cur);
  const d3 = Object.values(diary3).reduce((ttl, cur) => ttl + cur);
  const maxGrade = Math.max(d1, d2, d3);
  return d3 === maxGrade
    ? "I need to buy a bicycle for my third son."
    : d2 === maxGrade
    ? "I need to buy a bicycle for my second son."
    : "I need to buy a bicycle for my first son.";
}
