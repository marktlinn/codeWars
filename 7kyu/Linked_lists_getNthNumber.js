/*Linked Lists - Get Nth
Implement a GetNth() function that takes a linked list and an integer index and returns the node stored at the Nth index position. GetNth() uses the C numbering convention that the first node is index 0, the second is index 1, ... and so on.
So for the list 42 -> 13 -> 666, GetNth(1) should return Node(13);
*/
////// used for testing
// function Node(val) {
//     this.val = val;
//     this.next = null;
//   }

// const a = new Node('a')
// const b = new Node('b')
// const c = new Node('c')
// const d = new Node('d')

// a.next= b;
// b.next= c;
// c.next= d;
///////////

// PseudoCode/plan:
// if the node is null, throw an error,
// else initialise a count at 0
// while count is less that the index, iterate through the head of the node
// if node head === null, throw error.
// finally if head exists return it, else throw an error.
function getNth(head,index){
    if(!head) throw new Error()
      let count = 0;
    while(count < index){
      if(!head) throw new Error()
      head = head.next
      count++
    }
   if(head) {
     return head
   }
    else {
      throw new Error()
    }
}

// made neater like this: 
function getNth(head,index){
    if(head){
        let count = 0;
      while(count < index && head){
        head = head.next
        count++
      }
    }
    if(!head) throw new Error()
    return head
}
console.log(getNth(a,5))
  