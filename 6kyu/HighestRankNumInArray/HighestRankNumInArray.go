/*
Link:
https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/go
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

/*
Pseudocode:
Loop through numbers and make a map, check if each item exists, if so incrementing its value, else initialising it as 1

then loop through the key values and store the highest value in a var to return. If another value is found which has the same value count but is of a greater key value set the highest value stored variable to that value
return the stored variable
*/

package HighestRankNumInArray

// func HighestRank(nums []int) int {
// 	if len(nums) == 1 {
// 		return nums[0]
// 	}
// 	var valueMap = map[int]int{}
// 	var count int
// 	var highestValue int = nums[0]
// 	for _, elem := range nums {
// 		val, ok := valueMap[elem]
// 		if ok {
// 			valueMap[elem] = val + 1
// 		} else {
// 			valueMap[elem] = 1
// 		}
// 	}

// 	for k, v := range valueMap {
// 		if v > count {
// 			count = v
// 			highestValue = k
// 		} else if v == count {
// 			if k > highestValue {
// 				highestValue = k
// 			}
// 		}
// 	}
// 	return highestValue
// }

// A slightly more perfomant solution that doesn't require an additional loop through the map
func HighestRank(nums []int) int {
	if len(nums) == 1 {
		return nums[0]
	}
	var valueMap = map[int]int{}
	var frequency int

	var highestValue int = nums[0]
	for _, elem := range nums {
		val, ok := valueMap[elem]
		if ok {
			valueMap[elem] = val + 1
		} else {
			valueMap[elem] = 1
		}

		if valueMap[elem] > frequency {
			frequency = valueMap[elem]
			highestValue = elem
		} else if valueMap[elem] == frequency {
			if elem > highestValue {
				highestValue = elem
			}
		}
	}
	return highestValue
}
