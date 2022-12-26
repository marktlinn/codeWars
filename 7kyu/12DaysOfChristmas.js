/*
Link:
https://www.codewars.com/kata/57dd3a06eb0537b899000a64/train/javascript/63a8228a96a48e8ff956cd6f

The song sheets have been dropped in the snow and the lines of each verse have become all jumbled up.
Task
You have to write a comparator function which can sort the lines back into their correct order, otherwise Christmas will be cancelled!
Reminder: Below is what the final verse should look like
On the 12th day of Christmas my true love gave to me
12 drummers drumming,
11 pipers piping, 
10 lords a leaping, 
9 ladies dancing, 
8 maids a milking,
7 swans a swimming, 
6 geese a laying, 
5 golden rings, 
4 calling birds,
3 French hens, 
2 turtle doves and 
a partridge in a pear tree.
\\\\pseudocode////
Check 
  if the 0th index === "a" or "0" and sort accordingly, "a" first.
  else split both strings by " " and compare the 0th element as ints.
    if a[0] < b[0] return 1
    else return -1
*/

const comparator = function (a, b) {
  if (a[0] === "a" || b[0] === "O") return 1;
  else if (b[0] === "a" || a[0] === "O") return -1;
  if (+a.split(" ")[0] < +b.split(" ")[0]) return 1;
  else return -1;
};
