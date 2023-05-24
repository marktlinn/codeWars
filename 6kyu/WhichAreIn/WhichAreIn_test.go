package WhichAreIn

import (
	"reflect"
	"testing"
)

func TestInArray(t *testing.T) {
	type TestsType struct {
		n      []string
		n2     []string
		expect []string
	}

	var tests = []TestsType{
		{[]string{"live", "arp", "strong"}, []string{"lively", "alive", "harp", "sharp", "armstrong"}, []string{"arp", "live", "strong"}},
		{[]string{"cod", "code", "wars", "ewar", "ar"}, []string{}, []string{}},
	}
	for _, test := range tests {
		got := InArray(test.n, test.n2)
		if !reflect.DeepEqual(got, test.expect) {
			t.Errorf("InArray(%v, %v) = %v, want %v", test.n, test.n2, got, test.expect)
		}
	}

}
