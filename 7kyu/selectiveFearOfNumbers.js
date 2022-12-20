/*
Link:
https://www.codewars.com/kata/55b1fd84a24ad00b32000075/train/javascript
I dislike numbers a lot. But it's a little complicated: The number I'm afraid of depends on which day of the week it is... This is a concrete description of my mental illness:
  Monday --> 12
  Tuesday --> numbers greater than 95
  Wednesday --> 34
  Thursday --> 0
  Friday --> numbers divisible by 2
  Saturday --> 56
  Sunday --> 666 or -666
Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean)
\\\\pseudocode////
run a switch testing each day case against the num argument supplied. for the final one a nested ternary is used for line simplicity.
*/

const AmIAfraid = function (day, num) {
  switch (day) {
    case "Monday":
      return num === 12 ? true : false;
      break;
    case "Tuesday":
      return num > 95 ? true : false;
      break;
    case "Wednesday":
      return num === 34 ? true : false;
      break;
    case "Thursday":
      return num === 0 ? true : false;
      break;
    case "Friday":
      return num % 2 === 0 ? true : false;
      break;
    case "Saturday":
      return num === 56 ? true : false;
      break;
    case "Sunday":
      return num === 666 ? true : num === -666 ? true : false;
      break;
    default:
      return false;
      break;
  }
};
