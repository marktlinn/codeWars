/*
Link:
https://www.codewars.com/kata/58223370aef9fc03fd000071/train/javascript
Given a variable n,
If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.
If n is not an integer, return the string "NaN".
Ex:
dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
\\\\pseudocode/plan////
check input is a number, else return input
convert the num into a string and split it into individual elements
declare and initialise an isOdd boolean set to false;
loop through the elements to check:
    if elem is odd
        if elem is odd at index 0, set isOdd to true and return 'elem-';
        else if index is greater than 0 and less than the length of the array-1 andd isOdd is true return '-elem-'
        else if if it is the last index of the string and odd is false (i.e. the previous digit wasn't odd) return '-elem'
        else if the previous digit was odd and the index is less than array length-1 then we return 'elem-'
        else return the elem as is
    else set isOdd to false and return elem as is (i.e. as it is even);
join the elements into a string and return the result
*/



function dashatize(num) {
    if(Number.isInteger(num) === false) return String(num)
    const strNums = String(num).split('').filter(elem=> elem !== '-');
    let isOdd = false;
    return strNums.map((elem, i)=> {
        if(elem%2 !==0 && strNums.length>1){
            if (i===0){
                isOdd = true;
                return `${elem}-`
            }
            else if(i>0 && i<strNums.length-1 && isOdd === false){
                isOdd = true;
                return `-${elem}-`;
            }
            else if (i==strNums.length-1 && isOdd === false){
                return `-${elem}`;
            }
            else if (isOdd === true && i <strNums.length-1){
                return `${elem}-`
            }
            else return elem
        }
        else {
            isOdd = false;
            return elem;
        }
    }).join('')
}


console.log(dashatize(61));