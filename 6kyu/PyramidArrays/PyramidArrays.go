/*
Link:
https://www.codewars.com/kata/515f51d438015969f7000013/train/go
Write a function that when given a number >= 0, returns an Array of ascending length subarrays.
	pyramid(0) => [ ]
	pyramid(1) => [ [1] ]
	pyramid(2) => [ [1], [1, 1] ]
	pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
Note: the subarrays should be filled with 1s
*/

/*
Pseudocode:
Init a parent slice to hold other slices
f n is zero return the parent lice
loop to n
for each iteration create a new slice of 1's equal to the current iteration number
return the parent slice of slices
*/

package PyramidArrays

func fill(slice []int, value int) {
	for i := range slice {
		slice[i] = value
	}
}

func PyramidArrays(n int) [][]int {
	var parentSlice [][]int = [][]int{}
	if n == 0 {
		return parentSlice
	}
	for i := 1; i <= n; i++ {
		var newSlice []int = make([]int, i)
		fill(newSlice, 1)
		parentSlice = append(parentSlice, newSlice)
	}
	return parentSlice
}
