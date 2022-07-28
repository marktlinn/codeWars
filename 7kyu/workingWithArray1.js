/*In this kata the function returns an array/list of numbers without its last element. The function is already written for you and the basic tests pass, but random tests fail. Your task is to figure out why and fix it.
Good luck!
Hint: watch out for side effects.*/
// simple kata; I tried to solve it with the findLastIndex() method first as I thought it was cleaner but it wasn't supported.
// so, just filtered the array, removed all non numbers and popped off the last digit. 
function withoutLast(arr) {
    const onlyNums = arr.filter(num => typeof num == 'number');
    onlyNums.pop()
    return onlyNums
}

console.log(withoutLast([1, 2, 3, 4, 5,6,7,8, '']))