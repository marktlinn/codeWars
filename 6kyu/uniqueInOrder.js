// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

const uniqueInOrder=function(iterable){
    let iteration = iterable;
    let uniqueOrder = [];
    if(typeof iterable === 'string') {
        iteration = iterable.split('');
}
    for (let i = 0; i <iteration.length; i++) {
        if(iteration[i] !== iteration[i+1]) {
            uniqueOrder.push(iteration[i])
        }
    }
    return uniqueOrder;
  }

  console.log(uniqueInOrder([1,2,2,3,3]))