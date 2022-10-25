/*
Link:
https://www.codewars.com/kata/5ffc226ce1666a002bf023d2/train/javascript
given a matrix n x n (2-7), determine if the arrow is directed to the target (x).
There will be only 1 arrow '>' and 1 target 'x'
An empty spot will be denoted by a space " ", the target with a cross "x", and the scope ">"
Examples:
given matrix 4x4:
[
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' '], --> return true
  [' ', '>', ' ', 'x'],
  [' ', ' ', ' ', ' ']
] 
In this example, only a 4x4 matrix was used, the problem will have matrices of dimensions from 2 to 7
\\\\pseudocode/plan////
Each challenge consists of one large array with sub arrays.
Declare vars arrowRight = false, arrowLeft = false, x =false
loop through the main array and then through the individual elements
    in each sub array iteration if arrowLeft found set true, if x found set true, if arrowRight found set true
    if Arrleft found before x return false, arrowRight after x return false, if x true before '<' return true etc...
if no falsy or truthy conditions found return false 

//This is a brute force solution that was quickly put together there are definitely more optimal solutions in terms of time complexity
*/

const solution = mtrx => {
    for(let arr of mtrx){
        let arrowLeft = false;
        let arrowRight = false;
        let x = false;
        for(let elem of arr){
                if(elem === '<') arrowLeft = true;
                if(elem === '>') arrowRight = true;
                if(elem === 'x') x = true;
                if(elem === 'x' && arrowLeft === true) return false;   
                if(elem === 'x' && arrowRight === true) return true;   
                if(elem === '<' && x === true) return true;   
        };
    };
    return false;
};

console.log(solution([[' ', ' ', ' ', ' ', ' '],
[' ', ' ', ' ', ' ', ' '],
[' ', ' ', '<', ' ', ' '],
[' ', ' ', '>', ' ', 'x'],
[' ', ' ', '', ' ', ' ']]))