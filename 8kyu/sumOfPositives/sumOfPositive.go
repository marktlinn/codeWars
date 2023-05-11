/*
Link:
https://www.codewars.com/kata/5715eaedb436cf5606000381/train/go
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.

*/

package main

func PositiveSum(numbers []int) int {
	var sum int
	for _, elem := range numbers {
		if elem > 0 {
			sum += elem
		}
	}
	return sum
}

func main() {
	PositiveSum([]int{1, 2, 3, 4, 5})
}
