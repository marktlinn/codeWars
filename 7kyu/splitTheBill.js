/*
Link:
https://www.codewars.com/kata/5641275f07335295f10000d0
It's tricky keeping track of who is owed what when spending money in a group. Write a function to balance the books.
    The function should take one parameter: an object/dict with two or more name-value pairs which represent the members of the group and the amount spent by each.
    The function should return an object/dict with the same names, showing how much money the members should pay or receive.
Further points:
    The values should be positive numbers if the person should receive money from the group, negative numbers if they owe money to the group.
    If value is a decimal, round to two decimal places.
Translations and comments (and upvotes!) welcome.
Example
3 friends go out together: A spends £20, B spends £15, and C spends £10. The function should return an object/dict showing that A should receive £5, B should receive £0, and C should pay £5.
\\\\pseudocode////
From the object store the total number of keys (which will be people) in a variable.
Run over the values from the object and store the total / the number of people in a ttlAmount variable.
Create an amountOwed variable.
now we have the ttl each person should pay we loop over the values of the object
    loop through the object, set the key in amoutOwed to = key and value = the value in the origial object - ttlAmount fixed to 2 decimal places
return amountOwed object.
*/

function splitTheBill(x) {
    const numOfPpl = Object.keys(x).length;
    const ttlAmount = Object.values(x).reduce((prev,curr)=> prev+=curr)/numOfPpl
    const amountOwed = {}
    for(let key in x){
        amountOwed[key] = +(x[key]-ttlAmount).toFixed(2)
    }
    return amountOwed
}

console.log(splitTheBill({A: 20, B: 15, C: 10}))
console.log(splitTheBill({A: 40, B: 25, X: 10}))