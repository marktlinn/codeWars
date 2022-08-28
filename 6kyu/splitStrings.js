/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
Examples:
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

//PseudoCode/plan
//spit the string into array elements.
//declare a results variable
//Create an index count initialised at 1
//loop through the elements pushing the two elements per time to the results variable
// increment the index counter by 2
// if the length of the string isn't a round number the last element in the array is pushed to results followed by '_'
// result is returned

function solution(str){
    let result = [];
    let index = 1;
    let splitStr = str.split('');
    while(index< splitStr.length){
        result.push(splitStr[index-1]+ splitStr[index])
        index+=2;
    }
    if(splitStr.length %2 !== 0){
        result.push(splitStr[index-1] + '_')
    }
    return result
}

console.log(solution('abcdefg'))