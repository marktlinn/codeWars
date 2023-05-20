package EqualSidesOfArray

import (
	"testing"
)

func TestFindEvenIndex(t *testing.T) {
	type TestsType struct {
		n      []int
		expect int
	}

	var tests = []TestsType{
		{[]int{1, 2, 3, 4, 3, 2, 1}, 3},
		{[]int{1, 100, 50, -51, 1, 1}, 1},
		{[]int{1, 2, 3, 4, 5, 6}, -1},
		{[]int{20, 10, 30, 10, 10, 15, 35}, 3},
		{[]int{20, 10, -80, 10, 10, 15, 35}, 0},
		{[]int{10, -80, 10, 10, 15, 35, 20}, 6},
	}

	for _, test := range tests {
		got := FindEvenIndex(test.n)
		if got != test.expect {
			t.Errorf("FindEvenIndex(%v) = %v; want %v", test.n, got, test.expect)
		}
	}
}
