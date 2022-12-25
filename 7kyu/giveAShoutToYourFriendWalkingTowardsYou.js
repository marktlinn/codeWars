/*
Link:
https://www.codewars.com/kata/63a2928176157931b3945090/train/javascript
Kata
Write the function madShout that takes a string input sidewalk to calculate the shout string and return it.
The shout phrase is "Oi F!" but depending on the distance between your friend, the word expands.
Example for input 'sidewalk'
'---------Y-----F------------'
Y = You
F = Friend
'Shout' phrase:
Since in the example, the difference between the friends is 6 (F's index is 15 & that of Y's is 9), the shout phrase becomes 'Oiii F!'
Consider the following differences and its output:
Difference is 4 => 'Oii F!'
  2 => 'Oi F!'
  9 => 'Oiiiii F!'
  0 => 'Oi F!'
  1 => 'Oi F!'
  20 => 'Oiiiiiiiiii F!'
Some guides for coding
    Y will always be on the left and F will be on the right.
    The number of 'i's in the output must be >= 1
    All the inputs are valid.

\\\\pseudocode////
find index of Y and index of F, substract Y from F to find the distance
  return the phrase "Oi F!" repeating the letter "i" by the a number of times equal to distance between Y & F / 2.
*/

function madShout(sidewalk) {
  const distance = sidewalk.search(/f/i) - sidewalk.search(/y/i);
  return `O${"i".repeat(Math.round(distance / 2))} F!`;
}
