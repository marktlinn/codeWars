/*Linked Lists - Push & BuildOneTwoThree
Write push() and buildOneTwoThree() functions to easily update and initialize linked lists. Try to use the push() function within your buildOneTwoThree() function.
Here's an example of push() usage:
var chained = null
chained = push(chained, 3)
chained = push(chained, 2)
chained = push(chained, 1)
push(chained, 8) === 8 -> 1 -> 2 -> 3 -> null
The push function accepts head and data parameters, where head is either a node object or null/None/nil. Your push implementation should be able to create a new linked list/node when head is null/None/nil.
The buildOneTwoThree function should create and return a linked list with three nodes: 1 -> 2 -> 3 -> null
*/

function Node(data) {
    this.data = data;
    this.next = null;
}


// First function is push:
//We create a new node from the data passed as an argument and move the head up one place
// return the node
function push(head, data) {
    let node = new Node(data);
    node.next = head;
    return node;
}

//output is to be 1->2->3->null
//The node is initially created from null, so we need to work backwards
// The initial value set to next is null, so create a new node at position 3
// declare a variable of count at 2, and while count is > 0 push new headNode plus count
// decrement count in each iteration.
// return node
function buildOneTwoThree() {
    let count = 2;
    let noder = new Node(3);
    while(count>0){
        noder = push(noder, count)
        count--;
    }
    return noder;
}

let chained = null
push(chained, 3)
chained = push(chained, 3)
chained = push(chained, 2)
chained = push(chained, 1)

// console.log(chained)

console.log(buildOneTwoThree())