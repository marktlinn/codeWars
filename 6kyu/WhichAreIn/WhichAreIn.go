/*
Link:
https://www.codewars.com/kata/550554fd08b86f84fe000a58/go
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
Example 1:
	a1 = ["arp", "live", "strong"]
	a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
	returns ["arp", "live", "strong"]

Example 2:
	a1 = ["tarp", "mice", "bull"]
	a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
	returns []
Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: In some languages r must be without duplicates
*/

/*
Pseudocode:
Loop over array 1, for each element of array1 check each element of array2 to see if they contain a subString of array1's element.
	if element contained store it in a map

loop through the map and extract the keys into a slice,
sort and return the keys.
*/

package WhichAreIn

import (
	"sort"
	"strings"
)

func InArray(array1 []string, array2 []string) []string {
	var existsList = map[string]string{}
	for i := 0; i < len(array1); i++ {
		for _, j := range array2 {
			if strings.Contains(j, array1[i]) {
				existsList[array1[i]] = array1[i]
			}
		}
	}
	var keys []string = []string{}
	for k := range existsList {
		keys = append(keys, k)
	}
	sort.Strings(keys)
	return keys
}
