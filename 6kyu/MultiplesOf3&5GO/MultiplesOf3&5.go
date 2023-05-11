/*
Link:
https://www.codewars.com/kata/514b92a657cdc65150000006/train/go
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)

*/

/*
Pseudocode:
init an empty slice to keep track of numbers
for the given input, walk up from 0 to given number (exclusive) for each number check if it is divisible by 3 and 5
	if so pus hthe value to the slice
If the length of the slice > 0
	sum up the values and return the sum;
else return 0;
*/

package main

import "fmt"

// func Multiple3And5(number int) int {
// 	var totalInts []int
// 	for i := 0; i < number; i++ {
// 		if i%3 == 0 || i%5 == 0 {
// 			totalInts = append(totalInts, i)
// 		}
// 	}

// 	if len(totalInts) > 0 {
// 		var count int
// 		for _, e := range totalInts {
// 			count += e
// 		}
// 		return count
// 	}
// 	return 0
// }

func Multiple3And5(number int) int {
	var count int
	for i := 0; i < number; i++ {
		if i%3 == 0 || i%5 == 0 {
			count += i
		}
	}
	if count > 0 {
		return count
	}
	return 0
}

func main() {
	fmt.Println(Multiple3And5(10))
}
