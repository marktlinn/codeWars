/*Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

Notes

If the array is null/nil/None or empty you should return empty array ([]).
The rotten fruit name will be in this camelcase (rottenFruit).
The returned array should be in lowercase.
 */

//first if the array is null or has no items we'll return []
//Otherwise we'll create a new variable to hold new contents. Then we'll map over all the items in the array, calling a regex to search for occurrences of rotten
//if any are found the element is converted to lowercase, then rotten is replaced with '' and the element returned
//if no instance of rotten is found, the element is return as per the normal array
// finally return the mapped results

function removeRotten(bagOfFruits){
    if(bagOfFruits == null || bagOfFruits.length == 0) return [];
    let newBag =bagOfFruits.map(item=> {
        if(item.match(/rotten/)){
            return item.toLowerCase().replace('rotten', '')
        } else return item
    })
    return newBag
}

console.log(removeRotten(["apple","rottenbanana","kiwi","melone","orange"]))