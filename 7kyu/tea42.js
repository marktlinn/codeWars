/*
Tea for two!
Given a string or number write a function tea42 that takes as input a string or number and returns a string where every '2' charcter or digit has been replaced with a t.
tea42('coffee') //should return 'coffee'
tea42('tea') //should return 'tea'
tea42('2ea') //should return 'tea'
tea42(9022) //should return '90tt'
tea42(5676765) //should return '5676765'
tea42('2u2u') //should return 'tutu'
\\\\Pseudocode/plan////
Declare and initialise a var as an empty string.
Loop through the input in string form, if element == "2" change it to a 't' and add to var
return output var
*/

function tea42(input) {
    let output = '' 
    for(let elem of String(input)){
        if(elem == '2') elem= 't';
        output += elem
    }
    return output
};
