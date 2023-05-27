/*
Link:
https://www.codewars.com/kata/5784c89be5553370e000061b/train/javascript
Rick wants a faster way to get the product of the largest pair in an array. Your task is to create a performant solution to find the product of the largest two integers in a unique array of positive numbers.
All inputs will be valid.
Passing [2, 6, 3] should return 18, the product of [6, 3].

Disclaimer: only accepts solutions that are faster than his, which has a running time O(nlogn).

maxProduct([2, 1, 5, 0, 4, 3])              // 20
maxProduct([7, 8, 9])                       // 72
maxProduct([33, 231, 454, 11, 9, 99, 57])   // 104874
*/

/*
Pseudocode:
As The numbers will only be positive, negatives need not be considered.
Declare two vars, init at 0
loop thorug hthe array, 
  if the num > than var1, set var2 = var1 and var1= num
  else if num > var2, set var2 to num
return the sum of var1 & var2
*/

function maxProduct(a) {
  let num1 = 0;
  let num2 = 0;
  for(let elem of a){
    if(elem > num1){
      num2 = num1
      num1 = elem;
    } else if(elem > num2){
      num2 = elem;
    }
  }
  return num1 * num2
}