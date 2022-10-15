/*
Link:
https://www.codewars.com/kata/56069d0c4af7f633910000d3/train/javascript
You love coffee and want to know what beans you can afford to buy it.
The first argument to your search function will be a number which represents your budget.
The second argument will be an array of coffee bean prices.
Your 'search' function should return the stores that sell coffee within your budget.
The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.
\\\\pseudocode/plan////
run a sort funciton to arrange the numbers in ascending order
then run a filter function that'll only return the prices under or equal to the budget price
Return the numbers as a string separated by ','
*/

function search(budget, prices) {
    return prices.sort((a,b)=> a-b).filter(price=> price<=budget).join(',')
}

console.log(search(3, [6, 1, 2, 9, 2]))