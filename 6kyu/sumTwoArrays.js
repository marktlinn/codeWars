/*Your task is to create a function called addArrays, which takes two arrays consisting of integers, 
and returns the sum of those two arrays.
The twist is that (for example) [3,2,9] does not equal 3 + 2 + 9, it would equal '3' + '2' + '9' converted to an integer for this kata, meaning it would equal 329. 
The output should be an array of the sum in a similar fashion to the input (for example, if the sum is 341, you would return [3,4,1]).
If both arrays are empty, return an empty array.
In some cases, there will be an array containing a negative number as the first index in the array.
In this case treat the whole number as a negative number. See below:
.*/

 //Use .join('') to merge the arrays into numbers, then parse as ints and add the two complete arrasy together
 // create a varibale to hold the sum of the two arrays, then we need to convert that back into an array of its constituent numbers
 // Store the sum as a String and split(''); this way we get individual characters from the values it holds
 // finally iterate through the sum and return an array of it's elements as parsed as numbers
    function addArrays(array1, array2) {
    if( array1 == [] && array2 == []) return [];
    let sumOfArrs = (String(Number(array1.join('')) +Number(array2.join('')))).split('');
    const result = [];
        for(let i = 0; i <sumOfArrs.length; i++){
            if(sumOfArrs[i] == "-"){
                result.push(+(sumOfArrs[i] + sumOfArrs[i+1]))
                i++
            }
            else{
                result.push(+sumOfArrs[i])
            }
        }
        if (result == 0 || result === NaN) return [];
        return result;
}

  console.log(addArrays([-6,7,2,3,4,5,6],[2]))