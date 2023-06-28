/*
Link:
https://www.codewars.com/kata/559e10e2e162b69f750000b4/train/go
A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0
*/

/*
Pseudocode:
Store the length of the slice / 2 in a var
loop through the slice
	for each elem add to map with val of 0 or increment value if already present:
		if already present check value, if value greater than length of slice / 2 return map key
return -1
*/

package main

import "fmt"

func Dominator(a []int) int {
	var count = make(map[int]int)
	var length int = len(a) / 2
	for _, num := range a {
		count[num]++
		if count[num] > length {
			return num
		}
	}
	return -1
}

func main() {
	result := Dominator([]int{3, 4, 3, 2, 3, 1, 3, 3, 3, 3})
	fmt.Println(result)
}
