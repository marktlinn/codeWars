/*
Link:
https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/go
There is an array with some numbers. All numbers are equal except for one. Try to find it!
	findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
	findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.
The tests contain some very huge arrays, so think about performance.
*/

/*
Pseudocode:
Create a map.
Start looping through the slice of floats
	with each float, check if it is in the map, if so, increment the key's value by 1
	if float not in map
		add the float to the map and check the length of the map
			if length greater than 1, check the values of each key, if one === 1 return that value
*/

package FindTheUniqueNumber

func FindUniq(arr []float32) float32 {
	var valMap = map[float32]int{}
	var magicNumber float32
	for _, val := range arr {
		_, ok := valMap[val]
		if ok {
			valMap[val] = valMap[val] + 1
		} else {
			if len(valMap) > 1 {
				break
			} else {
				valMap[val] = 1
			}
		}
	}
	for k, v := range valMap {
		if v == 1 {
			magicNumber = k
		}
	}
	return magicNumber
}
