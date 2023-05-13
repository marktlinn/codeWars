package PersistentBugger

import (
	"reflect"
	"testing"
)

func TestPersistentBugger(t *testing.T) {
	tests := []struct {
		n      int
		expect int
	}{
		{39, 3},
		{4, 0},
		{25, 2},
		{999, 4},
		{5219337316486706645, 1},
		{1329050754972457392, 1},
		{3892132711709560479, 1},
	}
	for _, tc := range tests {
		got := PersistentBugger(tc.n)
		if !reflect.DeepEqual(got, tc.expect) {
			t.Errorf("PersistentBugger(%v) = %v; want %v", tc.n, got, tc.expect)
		}
	}
}
