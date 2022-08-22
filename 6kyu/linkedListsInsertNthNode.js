/*
Linked Lists - Insert Nth
Implement an InsertNth() function (insert_nth() in PHP) which can insert a new node at any index within a list.
InsertNth() is a more general version of the Push() function that we implemented in the first kata listed below. Given a list, an index 'n' in the range 0..length, and a data element, add a new node to the list so that it has the given index. InsertNth() should return the head of the list.
insertNth(1 -> 2 -> 3 -> null, 0, 7) === 7 -> 1 -> 2 -> 3 -> null)
insertNth(1 -> 2 -> 3 -> null, 1, 7) === 1 -> 7 -> 2 -> 3 -> null)
insertNth(1 -> 2 -> 3 -> null, 3, 7) === 1 -> 2 -> 3 -> 7 -> null)
You must throw/raise an exception if the index is too large.
*/

//pseudoCode/plan:
// Create a base case for if index is zero: create a new node with the data and it's next/linked value = current head and return the head.
// Else iterate through the nodes. One variable to hold all previous heads and one to hold all current heads.
// When the index is reached set the data value to be input as the next of the previous list and the remaining 'current' heads as the .next for the new node.
// return the head.

function Node(data) {
    this.data = data;
    this.next = null;
}

const A = new Node(1);
const B = new Node(2);
const C = new Node(3);
A.next = B;
B.next = C;

const newData = new Node(7)

function insertNth(head, index, data) {
  if (index == 0) {
    const node = new Node(data)
    node.next = head;
    return node;
  }
  else {
    const node = new Node(data);
    let counter = 0;
    let previous; 
    let current = head;
    while (counter < index) {
      previous = current;
      current = current.next;
      counter++;
    }
    node.next = current;
    previous.next = node;
    
    return head;
  }
}

console.log(insertNth(A,1, newData))