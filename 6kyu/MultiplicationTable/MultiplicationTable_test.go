package MultiplicationTable

import (
	"reflect"
	"testing"
)

func TestMultiplicationTable(t *testing.T) {
	type TestsType struct {
		n      int
		expect [][]int
	}

	var tests = []TestsType{
		{1, [][]int{{1}}},
		{2, [][]int{{1, 2}, {2, 4}}},
		{3, [][]int{{1, 2, 3}, {2, 4, 6}, {3, 6, 9}}},
		{4, [][]int{{1, 2, 3, 4}, {2, 4, 6, 8}, {3, 6, 9, 12}, {4, 8, 12, 16}}},
	}

	for _, test := range tests {
		got := MultiplicationTable(test.n)
		if !reflect.DeepEqual(got, test.expect) {
			t.Errorf("MultiplicationTable(%v) = %v; want %v", test.n, got, test.expect)
		}
	}
}
