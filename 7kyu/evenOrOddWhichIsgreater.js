/*
Link: 
https://www.codewars.com/kata/57f7b8271e3d9283300000b4/train/javascript
Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.
    If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"
    If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"
    If the total of both even and odd numbers are identical return: "Even and Odd are the same"
\\\Pseudocode///
create two vars 'even' & 'odd' = 0
convert the number into a string and split it
loop over each element 
    if element is odd add value to 'odd' 
    if elem is even add value to 'even' 
compare values
    if equal return "Even and Odd are the same"
    if odd greater than even return "Odd is greater than Even"
    else return "Even is greater than Odd"

*/

function evenOrOdd(str) {
    let even = 0;
    let odd = 0;
    String(str).split('').forEach(digit=> digit%2===0 ? even+=+digit : odd+=+digit);
    if(even === odd)  return "Even and Odd are the same";
    return even > odd ? "Even is greater than Odd" : "Odd is greater than Even";
}

console.log(evenOrOdd('12'));
console.log(evenOrOdd('123'));
console.log(evenOrOdd('112'));