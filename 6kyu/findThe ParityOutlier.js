/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)
[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

// Create a variable Even, to take a Boolean value;
// create a variable count
// next we go through the first 3 elements of the array and check to see if they are evens
// We'll check the first three numbers to see if they are even, if they are for each even number we'll add to the count
// Check the count if the count is <=1 we set even to true, as we're looking for an even number in the array; else set it to false
// Then we'll have two conditionals, one that runs if even is true: searching for a num%2 === 0 and the other searching for a num%2 !== 0 i.e. searching for a odd num. In either case, once we find the number we want to return it.

function findOutlier(integers){
    let even;
    let count= 0;
    for(let i= 0; i<=2; i++){
        if(integers[i]%2===0){
            count++
        }
    }
    if(count <=1){
        even = true;
    } 
    else even = false

    if(even == true){
        return integers.filter(num=> num%2===0).join('')
    }
    else return integers.filter(num=> num%2!==0).join('')
  }

  console.log(findOutlier([2,4,3,6,8,10]))
