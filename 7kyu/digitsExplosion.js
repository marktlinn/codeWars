/*
Link:
https://www.codewars.com/kata/585b1fafe08bae9988000314/train/javascript
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
Examples
explode("312")
should return :
"333122"
\\\\pseudocode/plan////
Arguments will be passed as a string.
create a result var = ''
split the argument passed into individual elements.
loop over every element in the array
add to result each element, repeated a number of times equal to its numeric value
return result.
*/

function explode(s) {
    let result = '';
    s.split('').forEach(elem=> result+=elem.repeat(+elem))
    return result
};


console.log(explode('312'));