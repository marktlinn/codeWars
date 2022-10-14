/*
Link:
https://www.codewars.com/kata/5a4e3782880385ba68000018/train/javascript
A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.
If the number has an odd number of digits, then there is only one middle digit. (For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. (For example, the middle digits of 1301 are 3 and 0.)
The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g. 413023 is a balanced number because the left sum and right sum are both 5.
The task
Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. The passed number will always be positive
-- if it is only one number then either side are seen to be 0, meaning it should return balanced.
-- Likewise if the number is only 2 digits it is automatically balanced
\\\\pseudocode/plan////
if number is less than 100 return balanced as either side will be balenced if it's a single or double digit
convert number to a string
test length of string, if it's divisible by two there are two middle nums, else 1
    if divisible by two create a var for elements up to first middle num
    create var for elems after 2nd middle num
        test if the sum of both vars are === if so return 'Balenced', else 'Not Balanced'
    if a single middle num create two vars to hold the elems before and after the middle num
        test if the sum of both vars are === is so return 'Balenced', else 'Not Balanced'
*** I used a separate function to reduce the elems of the vars, but this could be done in one function, for me it seemed to be cleaner to do so with an auxiliary function. 
*/

function sum(num){
    return num.split('').reduce((ttl,curr) => +ttl + +curr);
}

function balancedNum(number){
    if(number < 100) return 'Balanced';
    const strNums = String(number);
    const length = strNums.length;
    if(strNums.length%2===0){
        const upToMiddle1 = strNums.substring(0,length/2-1);
        const afterMiddle2 = strNums.substring(length/2+1)
        return sum(upToMiddle1) === sum(afterMiddle2) ? 'Balanced' : 'Not Balanced'
    }
    else{
        const upToMiddle1 = strNums.substring(0,Math.floor(length/2));
        const afterMiddle2 = strNums.substring(Math.ceil(length/2))
        return sum(upToMiddle1) === sum(afterMiddle2) ? 'Balanced' : 'Not Balanced'
    }
}

console.log(balancedNum(56239814))
console.log(balancedNum(789712))
console.log(balancedNum(893))
