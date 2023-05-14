/*
Link:
https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/go
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
	toWeirdCase("String") // => returns "StRiNg"
	toWeirdCase("Weird string case") // => returns "WeIrD StRiNg CaSe"
*/

/*
Pseudocode:
Declare a count var init at 0 & a result to hold the string output;

loop through the str argumetn provided
	if the element is a space add a space to result and set count to 0
	else if count is even increment count and add current elem in uppercase to result
	else add lowercase element to result and increment count.
*/

package kata

import "strings"

func toWeirdCase(str string) string {
	count := 0
	result := ""
	for i := 0; i < len(str); i++ {
		if string(str[i]) == " " {
			result += " "
			count = 0
		} else if count%2 == 0 {
			count++
			result += strings.ToUpper(string(str[i]))
		} else {
			count++
			result += strings.ToLower(string(str[i]))
		}
	}
	return result
}
