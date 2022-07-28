/*In this kata the function returns an array/list like the one passed to it but with its nth element removed (with 0 <= n <= array/list.length - 1). The function is already written for you and the basic tests pass, but random tests fail. Your task is to figure out why and fix it.*/

//So, just running the code, it's clear that the problem with it is one of mutation, so we can simply solve this issue by using the spread operator to make a deep copy of the data from the array and then the code works correctly.

function removeNthElement(arr, n) {
    // Fix it
    const arrCopy = [...arr];
    arrCopy.splice(n, 1); // removes the nth element
    return arrCopy;
  }