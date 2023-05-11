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
