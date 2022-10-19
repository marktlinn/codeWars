/*
Link
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
Return the average of the given array rounded down to its nearest integer.
The array will never be empty.
getAverage([2,2,2,2]),2)
getAverage([1,2,3,4,5,]),3);
getAverage([1,1,1,1,1,1,1,2]),1)
\\\\pseudocode/plan////
reduce the elements of the array into the max sum, divide by the length of the array
return the result rounded down
*/
function getAverage(marks){
    return Math.floor(marks.reduce((ttl,cur)=> ttl+cur)/marks.length)
};