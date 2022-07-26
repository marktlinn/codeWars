/*Task
Given Two integers a , b , find The sum of them , BUT You are not allowed to use the operators + and -
Notes
The numbers (a,b) may be positive , negative values or zeros . Returning value will be an integer . Javascript: the Array reduce methods are disabled, along with eval, require, and module .*/
// To solve this we'll have to use bit manipulation 
// first if y is zero we only need to return x.
// else:
// Using bitwise operators, we call the Xor operator to set the variables to bits and compare the two binary numbers
// This will return a binary 1 for each place where there is at least one 1
// we then call the & bitwise and to count and compare the two numbers in binary logging a 1 for when they are both 1's
// if the carry is 0, then there were no double 1's in our comparison and we can log the simple xor value returned from the comparison
// if there was a carry value i.e. there were two values compared that were both 1's, we need to carry the 1 over a digit and add another 0
// If there is a carry, we need to recursive run the add function again, passing values (xor value, carry << 1)
// Here each time there is a carry, beacause two ones are logged, we add an aditional zero to push the counting along one
// this mean that we log the correct binary arithmetic.
function add(x, y){
    if (y == 0) return x;
    let xor = x^y;
    let carry = x&y;
    return carry = 0? xor : add(xor, carry <<1);
}

console.log(add(2,3))