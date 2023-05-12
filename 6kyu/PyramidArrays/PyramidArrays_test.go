package PyramidArrays

import (
	"reflect"
	"testing"
)

func TestPyramidArrays(t *testing.T) {
	tests := []struct {
		n      int
		expect [][]int
	}{
		{0, [][]int{}},
		{1, [][]int{{1}}},
		{2, [][]int{{1}, {1, 1}}},
		{3, [][]int{{1}, {1, 1}, {1, 1, 1}}},
	}

	for _, tc := range tests {
		got := PyramidArrays(tc.n)
		if !reflect.DeepEqual(got, tc.expect) {
			t.Errorf("PyramidArrays(%v) = %v; want %v", tc.n, got, tc.expect)
		}
	}
}
