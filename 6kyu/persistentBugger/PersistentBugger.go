/*
Link:
https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/go
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
For example (Input --> Output):
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/

/*
Pseudocode:
Create a recursive program:
inputs: the number, iteration (init at 0)
if the number is between 0(inclusive) and 10 exclusive return the iteration integer

	increment iteration
	for the number given, convert it into a string
	loop over the string converting each element back into a number and keeping a count of the sum of each number multipled together
	return the function passing the new count (as the number) and the iteration
*/
package PersistentBugger

import (
	"fmt"
	"strconv"
	"strings"
)

func splitNums(num int) []string {
	var strNum string = strconv.Itoa(num)
	str := strings.Split(strNum, "")
	return str
}

func sumUpNums(stringNums []string) int {
	var currentCount int = 1

	for _, num := range stringNums {
		i, err := strconv.Atoi(num)
		if err != nil {
			fmt.Printf("Cannot convert %v to a number", num)
		} else {
			currentCount *= i
		}
	}
	return currentCount
}

func loopThrough(num int, iterations int) int {
	if num < 10 && num >= 0 {
		return iterations
	}
	iterations++
	var stringNums []string = splitNums(num)
	var numSumResult int = sumUpNums(stringNums)
	return loopThrough(numSumResult, iterations)
}

func PersistentBugger(num int) int {
	var iterations int = 0
	return loopThrough(num, iterations)
}
