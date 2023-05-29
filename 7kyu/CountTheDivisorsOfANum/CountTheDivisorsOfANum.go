/*
Link:
codewars.com/kata/542c0f198e077084c0000c2e/train/go/647486331e258e5687df74c9
Count the number of divisors of a positive integer n.
Random tests go up to n = 500000.
Examples (input --> output)
	4 --> 3 // we have 3 divisors - 1, 2 and 4
	5 --> 2 // we have 2 divisors - 1 and 5
	12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
	30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.
*/

/*
Pseudocode:
Find the square root
initiate a count
	loop from 1 to the square root of n
	if n % current index is zero then increment count,
		if n / current index is not equal to the current index increment again
return the final count.
*/

package kata

import "math"

func Divisors(n int) int {
	count := 0
	sqrtN := int(math.Sqrt(float64(n)))

	for i := 1; i <= sqrtN; i++ {
		if n%i == 0 {
			count++
			if n/i != i {
				count++
			}
		}
	}

	return count
}
