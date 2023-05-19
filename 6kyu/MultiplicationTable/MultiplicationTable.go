/*
Link:
https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/go
Your task, is to create N×N multiplication table, of size provided in parameter.
For example, when given size is 3:
	1 2 3
	2 4 6
	3 6 9
For the given example, the return value should be:
	[[1,2,3],[2,4,6],[3,6,9]]
*/

/*
Pseudocode:
Create a slice to hold a slice of ints
loop from 1 to size given
	inside the loop, create another slice to hold what the current slice input is
		in a nested loop create start adding to the input slice, creating slices of the size "size"
		each one being appended to the parent result slice
	When the nested loop completes, append the input slice to the result slice
When both loops have completed return the result slice
*/

package MultiplicationTable

func MultiplicationTable(size int) [][]int {
	var result [][]int
	for i := 1; i <= size; i++ {
		var input []int
		for j := i; len(input) < size; j += i {
			input = append(input, j)
		}
		result = append(result, input)
	}
	return result
}
