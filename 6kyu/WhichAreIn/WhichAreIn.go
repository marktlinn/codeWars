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
