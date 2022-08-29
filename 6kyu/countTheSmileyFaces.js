/*Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
Rules for a smiling face:
Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.
Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces:  ;( :> :} :]
*/

//PseudoCode/code
// construct a regex of potential values that can be combined
// declare a count variable at zero
// loop through the array and test if each element matches the smiley face criteria
// if so increment count by 1
// return count
function countSmileys(arr) {
    let regex = /(:|;)(-|~)?(\)|D)/gm
    let count = 0;
    for(let elem of arr){
        if(elem.match(regex)){
            count++
        }
    }
    return count
}

console.log(countSmileys([':D',':~)',';~D',':)']))