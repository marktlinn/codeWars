/*
For every good kata idea there seem to be quite a few bad ones!
In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
The sub arrays may not be the same length.
The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). All inputs may not be strings.
\\\\pseudocode////
create a var to store a count, intialise at 0;
loop through the array and within that start another loop to go through each individual element checking if the elem === good (case insensitive);
    if elem === good increment count
        if count greater tahn 0 and less than or equal to 2 return 'Publish!'
        else if count === zero return 'Fail!'
        else return 'I smell a series!'
*/

function well([...x]){
    const good = /good/i;
    let goodCount = 0;
    x.forEach(arr=> arr.forEach(elem=> good.test(elem) ? goodCount++ : null))
    if(goodCount === 0) return 'Fail!'
    if(goodCount> 0 && goodCount <=2) return 'Publish!'
    if(goodCount >2) return 'I smell a series!'
}

console.log(well([['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']]));
console.log(well([['gOOd', 'bad', 'BAD', 'bad', 'bad'], ['bad', 'bAd', 'bad'], ['GOOD', 'bad', 'bad', 'bAd']]));
console.log(well([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']]));
