/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
No floats or non-positive integers will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/
// simple Kata, just need to sort the arary in to ascending order and then return the sum of the first two indices.

function sumTwoSmallestNumbers(numbers) {  
    const sortedArr = numbers.sort((a,b)=> a-b)
    return sum = +sortedArr[0] + +sortedArr[1]
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 17, 78, 77]))
