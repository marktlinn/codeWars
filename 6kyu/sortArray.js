// Sort the given array of strings in alphabetical order, case insensitive. For example:
// ["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
// ["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]
// We need to return the array sorted alphabetically, ignoring the case sensitivity.
// To do so we're going to run a sort, and within that sort call the localeCompare method on the first element
// we'll compare a to subsequent elements with the sensitivity set to base to remove case sensitivity
// return the result.


sortme = function( names ){
    return names.sort((a,b)=> {
        return a.localeCompare(b, undefined, {sensitivity: 'base'})
    })
}

console.log(sortme(["Hello","there","I'm","fine"]))

// ["fine", "Hello", "I'm", "there"]