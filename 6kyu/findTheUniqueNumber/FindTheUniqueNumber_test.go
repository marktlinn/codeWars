package FindTheUniqueNumber

import "testing"

type TestsType struct {
	n      []float32
	expect float32
}

var tests = []TestsType{
	{[]float32{1.0, 1.0, 1.0, 2.0, 1.0, 1.0}, 2},
	{[]float32{0, 0, 0.55, 0, 0}, 0.55},
}

// func TestFindUniq(t *testing.T) {
// 	for _, test := range tests {
// 		got := FindUniq(test.n)
// 		if got != test.expect {
// 			test.Errorf("Expected FinUniq(%v) to equal %v, but got %v", test.n, test.expect, got)
// 		}
// 	}
// }

func TestFindUniq(t *testing.T) {
	for _, test := range tests {
		got := FindUniq(test.n)
		if got != test.expect {
			t.Errorf("Expected FindUniq(%v) to equal %v, but got %v", test.n, test.expect, got)
		}
	}
}
