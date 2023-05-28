package theSuperMarketQueue

import (
	"testing"
)

func TestQueueTime(t *testing.T) {
	// Test case 1
	result := QueueTime([]int{}, 1)
	expected := 0
	if result != expected {
		t.Errorf("Test case 1 failed. Expected: %d, got: %d", expected, result)
	}

	// Test case 2
	result = QueueTime([]int{1, 2, 3, 4}, 1)
	expected = 10
	if result != expected {
		t.Errorf("Test case 2 failed. Expected: %d, got: %d", expected, result)
	}

	// Test case 3
	result = QueueTime([]int{2, 2, 3, 3, 4, 4}, 2)
	expected = 9
	if result != expected {
		t.Errorf("Test case 3 failed. Expected: %d, got: %d", expected, result)
	}

	// Test case 4
	result = QueueTime([]int{1, 2, 3, 4, 5}, 100)
	expected = 5
	if result != expected {
		t.Errorf("Test case 4 failed. Expected: %d, got: %d", expected, result)
	}
}
