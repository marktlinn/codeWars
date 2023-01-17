/*
Link:
https://www.codewars.com/kata/5b1956a7803388baae00003a/train/javascript
You wrote all your unit test names in camelCase. But some of your colleagues have troubles reading these long test names. So you make a compromise to switch to underscore separation.
To make these changes fast you wrote a class to translate a camelCase name into an underscore separated name.
Implement the ToUnderscore() method.
Example:
  "ThisIsAUnitTest" => "This_Is_A_Unit_Test"
But of course there are always special cases...
You also have some calculation tests. Make sure the results don't get split by underscores. So only add an underscore in front of the first number.
Also Some people already used underscore names in their tests. You don't want to change them. But if they are not split correct you should adjust them.
Some of your colleagues mark their tests with a leading and trailing underscore. Don't remove this.
And of course you should handle empty strings to avoid unnecessary errors. Just return an empty string then.
Example:
  "Calculate15Plus5Equals20" => "Calculate_15_Plus_5_Equals_20"
  "This_Is_Already_Split_Correct" => "This_Is_Already_Split_Correct"
  "ThisIs_Not_SplitCorrect" => "This_Is_Not_Split_Correct"
  "_UnderscoreMarked_Test_Name_" => _Underscore_Marked_Test_Name_"

\\\\pseudocode////
split and loop through the string.
  if the current elem or previous elem was a "_" return element
  else if index > 0 & element is uppercase replace element with "_element"
  else if index > 0 & elem match [0-9]
    if the previous elem in the array was a number, return elem
    else return "_elem"
Join and return the map.
*/

const toUnderScore = name => {
  return name
    .split("")
    .map((elem, i) => {
      if (elem === "_" && name[i - 1] === "_") {
        return elem;
      } else if (i > 0 && elem.match(/[A-Z]/)) {
        return `_${elem}`;
      } else if (i > 0 && elem.match(/[0-9]/)) {
        return name[i - 1].match(/[0-9]/) ? elem : `_${elem}`;
      } else return elem;
    })
    .join("");
};

console.log(toUnderScore("ThisIsAUnitTest")); //, "This_Is_A_Unit_Test");
console.log(toUnderScore("Calculate1Plus1Equals2")); //, 'Calculate_1_Plus_1_Equals_2');
console.log(toUnderScore("Calculate15Plus5Equals20")); //, 'Calculate_15_Plus_5_Equals_20');
console.log(toUnderScore("ThisShouldBeSplittedCorrectIntoUnderscore")); //,"This_Should_Be_Splitted_Correct_Into_Underscore");
