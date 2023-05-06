/*
Link:
https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript
The number 898989 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 89=81+9289 = 8^1 + 9^289=81+92

The next number in having this property is 135135135:

See this property again: 135=11+32+53135 = 1^1 + 3^2 + 5^3135=11+32+53
Task

We need a function to collect these numbers, that may receive two integers aaa, bbb that defines the range [a,b][a, b][a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.
Examples

Let's see some cases (input -> output):

1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

If there are no numbers of this kind in the range [a,b][a, b][a,b] the function should output an empty list.

90, 100 --> []

*/

/*
Pseudocode:
Declare an empty array to hold the results.
loop through all numbers in the given range.
  If the number is less than 10 add push the num to the results arr
  else 
    create a var to hold calculations sum
    convert to string and split the number into digits.
      loop over the individual digits and add them to sum 
    if sum === the original number add it to results.
return results
*/

function sumDigPow(a, b) {
  const result = [];
  for (let i = a; i <= b; i++) {
    if (i < 10) result.push(i);
    else {
      const numStr = i.toString().split("");
      const count = numStr.reduce(
        (prev, curr, ind) => (prev += Number(curr) ** (ind + 1)),
        0
      );
      count === i ? result.push(count) : null;
    }
  }
  return result;
}
console.log(sumDigPow(1, 10)); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sumDigPow(1, 100)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

module.exports = sumDigPow;
