package FindTheMissingLetter

import (
	"testing"
)

func TestFindTheMissingLetter(t *testing.T) {
	type TestsType struct {
		n      []rune
		expect rune
	}

	var tests = []TestsType{
		{[]rune{'a', 'b', 'c', 'd', 'f'}, 'e'},
		{[]rune{'O', 'Q', 'R', 'S'}, 'P'},
		{[]rune{'R', 'S', 'T', 'V', 'W', 'X'}, 'U'},
	}

	for _, test := range tests {
		got := FindTheMissingLetter(test.n)
		if got != test.expect {
			t.Errorf("FindTheMissingLetter(%v) = %v; want %v", test.n, got, test.expect)
		}
	}
}
