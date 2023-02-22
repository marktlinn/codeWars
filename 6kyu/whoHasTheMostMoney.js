/*
You're going on a trip with some students and it's up to you to keep track of how much money each Student has. A student is defined like this:***see class below***.
As you can tell, each Student has some fives, tens, and twenties. Your job is to return the name of the student with the most money. If every student has the same amount, then return "all".
Notes:
    Each student will have a unique name
    There will always be a clear winner: either one person has the most, or everyone has the same amount
    If there is only one student, then that student has the most money

\\\\pseudocode////
Declare a variable mostMoney = {name: "", amount: 0}
Loop through the students, make a store of the cumulative values of the fives, tens and twenties and then compare that value to mostMoney.amount.
  if it is greater than mostMoney.amount, replace the value of amount and insert the current student's name in the name field
  if it is equal to amount set mostMoney name to "all"
return the name field of mostMoney var
*/

class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}

function mostMoney(students) {
  const mostMoney = { name: "", amount: 0 };
  students.forEach(elem => {
    let ttlCash = elem.fives * 5 + elem.tens * 10 + elem.twenties * 20;
    if (ttlCash > mostMoney.amount) {
      mostMoney.name = elem.name;
      mostMoney.amount = ttlCash;
    } else if (ttlCash === mostMoney.amount) {
      mostMoney.name = "all";
    }
  });
  return mostMoney.name;
}

const andy = new Student("Andy", 0, 0, 2);
const stephen = new Student("Stephen", 0, 4, 0);
const eric = new Student("Eric", 8, 1, 0);
const david = new Student("David", 2, 0, 1);
const phil = new Student("Phil", 0, 2, 1);
const cam = new Student("Cameron", 2, 2, 0);
const geoff = new Student("Geoff", 0, 3, 0);

console.log(mostMoney([andy, stephen, eric, david, phil])); //, "Eric");
console.log(mostMoney([cam, geoff, andy, stephen, eric, david, phil])); //, "Eric")

// "What happens if there is only one student?"
console.log(mostMoney([andy])); //, "Andy")
console.log(mostMoney([stephen])); //, "Stephen")

// "What happens if all students have the same amount of money?"
console.log(mostMoney([cam, geoff])); //, "all")
console.log(mostMoney([david, cam, geoff])); //, "all")
