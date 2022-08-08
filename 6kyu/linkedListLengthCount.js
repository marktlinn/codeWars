// Linked Lists - Length & Count
// Implement Length() to count the number of nodes in a linked list.
// length(null) => 0
// length(1 -> 2 -> 3 -> null) => 3

function Node(val,next){
    this.val = val;
    this.next = null
  }
  
  const a = new Node(1)
  const b = new Node(1)
  const c = new Node(1)
  const d = new Node(1)
  
  a.next= b;
  b.next= c;
  c.next= d;



//pseudoCode/plan:
//create two functions one to determine the length of a linked list and the other to sum the numerical elements
//List length:
// set current eqaul to head
// set a count variable
// while current !== null add one to count and set current = the next node

function length(head) {
    let current = head;
    let count = 0;
    while(current !== null){
        count++
        current = current.next
    }
    return count
}

//sum numerical elements inside linked list:
// This function counts the number of times an integer appears in a list
// So, similiar to the above function, we'll iterate through the linked list and if the value of the current node equals the given integer, we'll log a count.
function count(head, int) {
    let current = head;
    let sum = 0;
    while(current !== null){
        if(current.val === int){
            sum++
        }
        current= current.next;
    }
    return sum
}

console.log(count(a, 1))