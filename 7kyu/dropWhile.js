/*Yet another staple for the functional programmer. You have a sequence of values and some predicate for those values. You want to remove the longest prefix of elements such that the predicate is true for each element. We'll call this the dropWhile function. It accepts two arguments. The first is the sequence of values, and the second is the predicate function. The function does not change the value of the original sequence.

Your task is to implement the dropWhile function. If you've got a span function lying around, this is a one-liner! Alternatively, if you have a takeWhile function on your hands, then combined with the dropWhile function, you can implement the span function in one line. This is the beauty of functional programming: there are a whole host of useful functions, many of which can be implemented in terms of each other.*/

//PseudoCode/plan
// the instructions here were a little vague, but bascially we need to test an array according to another function i.e. the predicate function and process it accordingly.
// We want to test each element of the array according to the predicate function. When the function finds a false element we want to log elements there and thereafter, but none before. If no falsy values are found we'll return an empty array.
// So, first create the example isEven function given by the code challenge
// next, loop through each lement in the array and test it with the predicate function
// if the function returns false, slice the array from the index of that function until the end and return that sliced array.
// else, the function found no false values so we add none to our return array i.e. 
// return an empty array.

function isEven(num) {
    return num % 2 === 0;
}

function dropWhile(arr, pred) {
    for(let elem of arr){
        if(pred(elem) == false){
            return arr.slice(arr.indexOf(elem))
        }
    }
    return [];
}

var seq = [2,4,6,8];

console.log(dropWhile(seq, isEven))
