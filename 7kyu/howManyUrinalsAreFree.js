/*
Link:
https://www.codewars.com/kata/5e2733f0e7432a000fb5ecc4/train/javascript/63c96624ea01520e03857cfe

In men's public toilets with urinals, there is this unwritten rule that you leave at least one urinal free between you and the next person peeing. For example if there are 3 urinals and one person is already peeing in the left one, you will choose the urinal on the right and not the one in the middle. That means that a maximum of 3 people can pee at the same time on public toilets with 5 urinals when following this rule (Only 2 if the first person pees into urinal 2 or 4).

Your task:
You need to write a function that returns the maximum of free urinals as an integer according to the unwritten rule.
Input
A String containing 1s and 0s (Example: 10001) (1 <= Length <= 20)
A one stands for a taken urinal and a zero for a free one.
Examples
  10001 returns 1 (10101)
  1001 returns 0 (1001)
  00000 returns 3 (10101)
  0000 returns 2 (1001)
  01000 returns 1 (01010 or 01001)
Note
When there is already a mistake in the input string (for example 011), then return -1

\\\\pseudocode////
intialise a count var at 0
loop through through the string with a for i C style loop
  if element before i = "0" and element after i = "0"
    increment count and index by 1
  else if either element before or after i are 1's 
    check if i === "1" 
      if so return -1
return count
*/

function getFreeUrinals(urinals) {
  let count = 0;

  for (let i = 0; i < urinals.length; i++) {
    if (urinals[i - 1] !== "1" && urinals[i + 1] !== "1") {
      if (urinals[i] === "0") {
        count++;
        i++;
      }
    } else if (urinals[i - 1] === "1" || urinals[i + 1] === "1") {
      if (urinals[i] === "1") {
        return -1;
      }
    }
  }
  return count;
}
