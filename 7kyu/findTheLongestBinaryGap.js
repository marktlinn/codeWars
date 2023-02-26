/*
Link:
https://www.codewars.com/kata/55b86beb1417eab500000051/train/javascript

A binary gap within a positive number num is any sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of num.
For example:
  9 has binary representation 1001 and contains a binary gap of length 2.
  529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3.
  20 has binary representation 10100 and contains one binary gap of length 1.
  15 has binary representation 1111 and has 0 binary gaps.
Write function gap(num) that,  given a positive num,  returns the length of its longest binary gap.
The function should return 0 if num doesn't contain a binary gap.

\\\\pseudocode////
Declare and init a counts var as an array to hold counts of zeros
declare a count var to hold a current count
declare a bool variable to act as a boolean switch, init as false.
Convert the number into its binary form in a string
split the string and iterate through the string
  if boolSwitch is true 
    if current element is a zero increment count
    else push the current count to counts array, set count to zero and boolSwitch to false
  if current element is a zero boolSwitch to be true and increment count
finally 
  if counts contains any values (has a length greater than 0) return the maximum value of the count array.
  else return 0
*/

function gap(num) {
  const counts = [];
  let count = 0;
  let zeroFound = false;
  num
    .toString(2)
    .split("")
    .forEach(elem => {
      if (zeroFound) {
        if (elem === "0") {
          count++;
        } else {
          counts.push(count);
          count = 0;
          zeroFound = false;
        }
      } else if (elem === "0") {
        zeroFound = true;
        count++;
      }
    });
  return counts.length > 0 ? Math.max(...counts) : 0;
}

console.log(gap(9)); //,2);
console.log(gap(529)); //,4);
console.log(gap(20)); //,1);
console.log(gap(15)); //,0);
