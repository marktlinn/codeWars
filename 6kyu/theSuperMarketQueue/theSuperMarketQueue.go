/*
Link:
https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/go
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
input:
	customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
	n: a positive integer, the number of checkout tills.
output:
	The function should return an integer, the total time required.
*/

/*
Pseudocode:
loop over the numbers in the slice:
	keep score of the cumulative sum
	keep score of the max value
if the max value found is greater than n return the maxValue found
else return the total sum / n
*/

package theSuperMarketQueue

func QueueTime(customers []int, n int) int {
	var ttl int
	var maxWait int

	for _, val := range customers {
		if val > maxWait {
			maxWait = val
		}
		ttl += val
	}
	if maxWait < n {
		return maxWait
	}
	return ttl / n
}
