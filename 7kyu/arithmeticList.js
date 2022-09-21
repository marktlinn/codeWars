/*
Link:
https://www.codewars.com/kata/541da001259d9ca85d000688/train/javascript
In this kata, you will write an arithmetic list which is basically a list that contains consecutive terms in the sequence. 
You will be given three parameters :
first the first term in the sequence
c the constant that you are going to ADD ( since it is an arithmetic sequence...)
l the number of terms that should be returned
Useful link: Sequence
Be sure to check out my Arithmetic sequence Kata first ;)
Don't forget about the indexing pitfall ;)
\\\\pseudocode/plan////
declare empty array variable: ttl
    loop from first digit,
        while ttl is less than l
            increment by c and push value to ttl
return ttl
*/

const seqlist = function(first,c,l){
    const ttl = [];
    for(let i = first; ttl.length<l; i+=c ){
        ttl.push(i);
    }
    return ttl;
}

console.log(seqlist(0,2,20))