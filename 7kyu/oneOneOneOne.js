/*
Write
function consecutiveOnes(nums) {}
that takes in array nums and returns the maximum consecutive 1's
For example
consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0]) === 3
consecutiveOnes([1, 1, 0, 0, 1]) === 2
consecutiveOnes([0, 0, 0, 0, 0]) === 0

\\\\\\\Pseudocode////////
create vars result & ttl 
loop through array
    if num is 1 ttl++
        if ttl is greater than result, result = ttl
    else ttl reset to 0
return result
*/

function consecutiveOnes(nums){
    let result = 0;
    let ttl = 0;
    for(let i = 0; i<nums.length; i++){
        if(nums[i] === 1){
            ttl++
          if(ttl>result) result = ttl
        } 
        else{
            ttl = 0;
        }
    }
    return result;
}
 