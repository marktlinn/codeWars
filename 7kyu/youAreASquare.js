/*A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them /*into a square of square building blocks!
However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number /*of building blocks is a perfect square.
/*Task
/*Given an integral number, determine if it's a square number:
In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
*/

//PseudoCode/plan:
// Initialise a variable count at 1
// loop through numbers from 1 to n: while the count is lower than n, test whether count**2 === n;
// if so, return true, else continue to loop through the numbers incrementing count
// if no suitable square is found return false

const isSquare = function(n){
    let count = 0;
    while(count <=n){
        if(count**2 === n) return true
        count++
    }
    return false
}

console.log(isSquare(0))