// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!
// Here's the deal:
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

//pseudoCode/plan
//******Code would not accept replaceAll So the below was my first answer which works perfectly*******/
//if string is empty/falsey return false
//split the string into wrods, loop through each word capitalising the first word, if a space remove it
// join the string
// finally check the length, if it's over 139 return false, else return the string with a # prefixed to it

function generateHashtag (str) {
    if(str == false || str == " ") return false;
    let tweet = str.split(' ').map(elem=> {
       return elem == ' '? '' : elem.slice(0,1).toUpperCase() + elem.slice(1) 
    }).join('')
    return tweet.length > 139? false : "#" + tweet
}

console.log(generateHashtag(" "))

