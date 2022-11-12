/*
Link:
https://www.codewars.com/kata/552564a82142d701f5001228/train/javascript
We need to write some code to return the original price of a product, the return type must be of type decimal and the number must be rounded to two decimal places.
We will be given the sale price (discounted price), and the sale percentage, our job is to figure out the original price.
For example:
Given an item at $75 sale price after applying a 25% discount, the function should return the original price of that item before applying the sale percentage, which is ($100.00) of course, rounded to two decimal places.
DiscoverOriginalPrice(75, 25) => 100.00M where 75 is the sale price (discounted price), 25 is the sale percentage and 100 is the original price
\\\\pseudocode////
create a varible ot be the difference between 100 and sales percentage
return, as a number, the discountedPrice/difference times by 100. use the toFixed method to get an answer of two decimal places.
*/


function discoverOriginalPrice(discountedPrice, salePercentage){
    const difference = 100 - salePercentage;
    return +((discountedPrice / difference) * 100).toFixed(2);
}