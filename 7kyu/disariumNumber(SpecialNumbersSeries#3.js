/*
Link: 
https://www.codewars.com/kata/5a53a17bfd56cb9c14000003/train/javascript
Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
Task
Given a number, Find if it is Disarium or not .
Notes
    Number passed is always Positive .
    Return the result as String
Input >> Output Examples
disariumNumber(89) ==> return "Disarium !!"
Explanation:
    Since , 8^1 + 9^2 = 89 , thus output is "Disarium !!"
disariumNumber(564) ==> return "Not !!"
Explanation:
    Since , 5^1 + 6^2 + 4^3 = 10^5 != 564 , thus output is "Not !!"
\\\\pseudocode/plan////
convert number into a string and then split that string.
    create a var to hold the result
    for each element sum the element number by the power of its index+1 (to avoid 0 indexical)
    add each elem to teh result var 
    test if the sum of the result var is equal to the num argument
        if so return "Disarium !!"
        else return "Not !!"
*/

function disariumNumber(n){
    let result = 0;
    const numArr = String(n).split('');
    numArr.forEach((elem,index)=> {
        result +=(+elem)**(index+1);
    })
    return result === n?  "Disarium !!" : "Not !!";
}

console.log(disariumNumber(564))
console.log(disariumNumber(89))