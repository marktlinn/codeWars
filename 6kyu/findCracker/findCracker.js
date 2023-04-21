/*
Link:
https://www.codewars.com/kata/59f70440bee845599c000085/train/javascript

Someone was hacking the score. Each student's record is given as an array The objects in the array are given again as an array of scores for each name and total score. ex>
var array = [
  ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
  ["name2", 110, ["B", "A", "A", "A"]],
  ["name3", 200, ["B", "A", "A", "C"]],
  ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]]
  ];
The scores for each grade is:
    A: 30 points
    B: 20 points
    C: 10 points
    D: 5 points
    Everything else: 0 points

If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.
Returns the name of the hacked name as an array when scoring with this rule.
var array = [
  ["name1", 445, ["B", "A", "A", "C", "A", "A"]], // name1 total point is over 200 => hacked
  ["name2", 110, ["B", "A", "A", "A"]], //  name2 point is right
  ["name3", 200, ["B", "A", "A", "C"]], // name3 point is 200 but real point is 90 => hacked
  ,
  ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]] // name4 point is right
  ];
    return ["name1", "name3"];

*/

/*
Pseudocode:
declare a function to calculate the scores form the letters and return them (switch statement)

Declare an results array, init empty
Loop over the array of students
  in each student sub-array 
    if the total score is greater than 200 push the student's name to the result
    else 
      declare a var countBs = 0
      loop through the array of grades and calculate sum of grades
        if elem is a B or A increment countBs
        if countBs >= 5 && === to gradeArr length && gradeCount <= 180 increment grade count by 20
        compare the total to the second element of the parent student array
        if greater than the total push student name to result array
return result array
*/

function score(grade) {
  switch (grade) {
    case "A":
      return 30;
    case "B":
      return 20;
    case "C":
      return 10;
    case "D":
      return 5;
    default:
      return 0;
  }
}

function findHack(arr) {
  const results = [];

  arr.forEach(elem => {
    const total = elem[1];

    if (total > 200) {
      results.push(elem[0]);
    } else {
      let countBs = 0;
      let gradeChecker = elem[2].reduce((acc, curr) => {
        if (curr === "B" || curr === "A") {
          countBs++;
        }
        return (acc += score(curr));
      }, 0);

      if (gradeChecker <= 180 && countBs >= 5 && countBs === elem[2].length) {
        gradeChecker += 20;
      }

      if (gradeChecker < total) {
        results.push(elem[0]);
      }
    }
  });

  return results;
}

const testArr = [
  ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
  ["name2", 110, ["B", "A", "A", "A"]],
  ["name3", 200, ["B", "A", "A", "C"]],
  ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]],
];
console.log(findHack(testArr)); //toEqual(["name1", "name3"]);

module.exports = findHack;
