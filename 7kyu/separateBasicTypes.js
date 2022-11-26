/*
Given: a sequence of different type of values (number, string, boolean). You should return an object with separate properties for each of the types presented in input. Each property should contain an array of corresponding values.
    • keep order of values like in input array
    • if type is not presented in input, no corresponding property are expected
So, for this input:
    ['a', 1, 2, false, 'b']
expected output is:
    {
    number: [1, 2],
    string: ['a', 'b'],
    boolean: [false]
    }
\\\\pseudocode////
set an empty object;
loop through the input array
    check if each item's type exists in the object.
        if the typeof the item exists in the object push the item to the value (which is an array)
        else if the typeof the item doesn't exist, create it and give it the value of item.
return the object
*/

function separateTypes(input) {
    const types = {}
    input.forEach(item=> {
        const thisType = typeof item;
        if(types[thisType]){
            types[thisType].push(item);
        }
        else{
            types[thisType] = [item];
        }
    })
    return types;
}

console.log(separateTypes(['a', 1, 2, false,true, 'b']));
console.log(separateTypes(['a', 1, 2 ]));