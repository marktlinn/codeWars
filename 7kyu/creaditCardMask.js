/*
Link:
https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask 
Your task is to write a function maskify, which changes all but the last four characters 
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->
// "What was the name of your first 
"Skippy" --> "##
"Nananananananananananananananana Batman!"
"####################################man!"
\\\\Pseudocode/plan////
check the length of the string, slice the last 4 elements of the string
    if the string is longer than 4 return the length of the string -4 as # with the digits added to the end
    else return the string as is.
*/
function repeater(item, times){
    let ttl = '';
    for(let i = 0; i<times; i++){
        ttl+=item
    }
    return ttl;
}

function maskify(cc) {
    const ttlElems = cc.length;
    return ttlElems > 4 ? repeater('#',ttlElems-4)+cc.slice(ttlElems-4) : cc;
}


console.log(maskify('Nananananananananananananananana Batman!'))

// '############5616'