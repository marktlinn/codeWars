/*
Save Christmas!
Santa needs you to write two functions. Both of the functions accept a sequence of objects. The first one returns a sequence containing only the names of the nice people, and the other returns a sequence containing only the names of the naughty people. Return an empty sequence [] if the result from either of the functions contains no names.
The objects in the passed will represent people. Each object contains two properties: name and wasNice.
name - The name of the person
wasNice - True if the person was nice this year, false if they were naughty
\\\\\\\PseudoCode/Plan////////
loop through the array of objects, test each object's wasNice property
first func
    if wasNice === true, push to wasNice Arr
    return Arr
sec fun
    if wasNice === false, push to wasNaughty arr
    return arr
*/

function getNiceNames(people){
    const wasNice = [];
    for(let elem of people){
        if(elem.wasNice === true) wasNice.push(elem.name)
    }
    return wasNice;
}

function getNaughtyNames(people){
    const wasNaughty = [];
    for(let elem of people){
        if(elem.wasNice === false) wasNaughty.push(elem.name)
    }
    return wasNaughty;
}

console.log(getNiceNames( [
    { name: 'Warrior reading this kata', wasNice: true },
    { name: 'xDranik', wasNice: false },
    { name: 'Santa', wasNice: true }
] ))

getNaughtyNames( [
    { name: 'Warrior reading this kata', wasNice: true },
    { name: 'xDranik', wasNice: false },
    { name: 'Santa', wasNice: true }
] )