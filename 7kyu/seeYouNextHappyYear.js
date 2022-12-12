/*
Link:
https://www.codewars.com/kata/5ae7e3f068e6445bc8000046/train/javascript
Given a year find the next year with unique digits if.e. where each digit is unique (occurs only once)
Notes:
    Year Of Course always Positive .
    Have no fear , It is guaranteed that the answer exists .
    It's not necessary that the year passed to the function is Happy one .
    Input Year with in range (1000  ≤  y  ≤  9000)
\\\\pseudocode////
Increment year, convert year to string and place it in a set, while the length of the set is < 4 conintue the loop
  if size = 4 return year.
*/

function nextHappyYear(year) {
  while (new Set(String(++year).split("")).size < 4);
  return year;
}

console.log(nextHappyYear(3331)); //,3401);
console.log(nextHappyYear(1987)); //,2013);
console.log(nextHappyYear(5555)); //,5601);
console.log(nextHappyYear(7712)); //,7801);
