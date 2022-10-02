/*Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
Note: a and b are not ordered!
Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2) 
\\\psuedocode/plan///
create a auxilary function to loop between two two numbers and sum up all number between them
if a is equal to b, return a
    else use the auxiliary find and return the sum of the numbers from the smaller to bigger number
*/

function counter(num1, num2){
  let sum = 0;
  for(let i = num1; i<=num2; i++){
    sum+=i;
  }
  return sum;
}

function getSum( a,b ){
  if(a === b){
    return a;
  } else{
    return a < b ? counter(a,b): counter(b,a);
  }
}

console.log(getSum(0,5))