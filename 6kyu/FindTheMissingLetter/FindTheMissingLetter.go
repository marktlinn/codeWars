/*
Link:
https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/go
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.
Example:
	['a','b','c','d','f'] -> 'e'
	['O','Q','R','S'] -> 'P'
	(Use the English alphabet with 26 letters!)
*/

/*
Pseudocode:
Create an array of runes containing the alphabet
declare an index var
take the first element in the passed slice of runes
	iterate through the alphabet to find the first element from the rune slice
	set the index to that number, then walk up the length of the rune slice comparing each value to the index in the array, increment the index with each iteration. If the item is not a match return the array at that index
*/

package FindTheMissingLetter

// func FindTheMissingLetter(chars []rune) rune {
// 	var alphabet [26]rune = [26]rune{'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'}
// 	var index int
// 	var missingRune rune

// 	for i, letter := range alphabet {
// 		if chars[0] == letter || chars[0] == letter-32 {
// 			index = i
// 			break
// 		}
// 	}
// 	for _, letter := range chars {
// 		if letter != alphabet[index] && letter != alphabet[index]-32 {
// 			missingRune = letter - 1
// 			break
// 		}
// 		index++
// 	}
// 	return missingRune
// }

// store the value at first index from chars
// loop through chars from the 1st index comparing the current position in chars to the last stored in the lastIndex variable
// if the element  == the lastIndex + 1 then update lastIndex to equal the current element in chars
// else return the lastIndex + 1
func FindTheMissingLetter(chars []rune) rune {
	var lastIndex rune = chars[0]
	for _, elem := range chars[1:] {
		if elem != lastIndex+1 {
			break
		}
		lastIndex = elem
	}
	return lastIndex + 1
}
