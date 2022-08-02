/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
Example: (Input --> Output)
"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

//pseudocode/plan
// First create a map variable to add Key/values to
// we need to loop through the string, so first, make it lowercase to avoid case sensitivity edge cases
// split the string
// loop through the string with a 'for...of' loop, if the letter is in the map we'll return false
// else we'll add the letter to the map
// after all loops we'll return true, as it means no repetition of letters have been met through the looping

function isIsogram(str){
    if(str === undefined) return true
    let hashMap = new Map()
    const string = str.toLowerCase().split('')
    for(let letter of string){
        if(hashMap.has(letter)){
            return false
        } 
        else{
            hashMap.set(letter, 'val')
        }
    }
    return true
  }
  
  console.log(isIsogram('abaa'))