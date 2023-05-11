/*
Link:
https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/go
Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.
Example
	For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

/*
Pseudocode:
The challenge requires the function to return a slice.
Declare a slice with two initial values of {0,0}
loop over th einput from the slice numbers:
	increment the first value by the count of positive digits received
	increment slice at the second index by the sum of the negative indeces found.
return the result slice.

***If the number of elements are known for the slice prior to compile time i.e. that there will only ever be a maximum of two element in the slice, an array could also be used***
*/

package main

import "fmt"

func CountPositivesSumNegatives(numbers []int) []int {
	var res = []int{0, 0}
	for i := 0; i < len(numbers); i++ {
		if numbers[i] > 0 {
			res[0] += 1
		} else {
			res[1] += numbers[i]
		}
	}
	return res
}

func main() {
	arr := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15}
	var result []int = CountPositivesSumNegatives(arr)
	fmt.Println(result)
}
