/*
Link:
Linked Lists - Push & BuildOneTwoThree

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

// first solution
// class Node {

//   int data;
//   Node next = null;

//   Node(final int data) {
//     this.data = data;
//   }

//   public static Node push(final Node head, final int data) {
//     Node newNode = new Node(data);
//     newNode.next = head;
//     return newNode;
//   }

//   public static Node buildOneTwoThree() {
//     int count = 2;
//     Node newNode = new Node(3);
//     while (count > 0) {
//       newNode = push(newNode, count);
//       count--;
//     }
//     return newNode;
//   }
// }

// Second solution with constructor overloading
class Node {

  int data;
  Node next = null;

  Node(final int data) {
    this.data = data;
  }

  Node(final int data, Node node) {
    this.data = data;
    this.next = node;
  }

  public static Node push(final Node head, final int data) {
    Node newNode = new Node(data, head);
    return newNode;
  }

  public static Node buildOneTwoThree() {
    Node newNode1 = new Node(3);
    Node newNode2 = new Node(2, newNode1);
    Node newNode3 = new Node(1, newNode2);
    return newNode3;
  }
}