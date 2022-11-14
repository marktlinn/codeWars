/*
Link:
https://www.codewars.com/kata/5ace35dc307eb294300000b4/train/javascript
A spoonerism is an error in speech where the initial sounds of two words are swapped. The name comes from William Archibald Spooner who was famous for these slip ups.
Some spoonerisms work by simply swapping the first two letters of the words.
    E.g.   *"dental   receptionist"*     becomes    *"rental deceptionist"*
Others, involving words beginning with several consonants are a bit more complex. To make them work we have to swap all consonants up to the first vowel.
    E.g.    *"strong   wrangler"*    to    *"wtrong   srangler"*    does not work
    but    *"strong   wrangler"*    to    *"wrong   strangler"*    does
Sadly these mistakes often don't translate to text very well, as it's more about the sounds than the spelling but i've managed to find a few silly ones for you. There are a few more examples in the test section to help you.
Your code should be able to:
    spoonerise a string of two words
    spoonerise the first and last words in a string of three words
    return "No spoons here" for strings smaller than two or larger than three words
    all words will start with a consonant and contain at least one vowel (Note that a 'y' is considered a consonant for this kata)
\\\\pseudocode////
create an auxiliary function:
to accept three arguments: 1stword, 2ndword and middleword
in func, findIndex of first vowel in 1stword and store in var
in func, findIndex of first vowel in 2ndword and store in var
    if no middle word:
        return 
            first word as second word sliced to first vowel index, and the 1stword sliced from stored index appended to end
            second word as first word sliced to first vowel index, and the 2ndword sliced from stored index appended to end
    if middle word
            first word as second word sliced to first vowel index, and the 1stword sliced from stored index appended to end
            middleword
            second word as first word sliced to first vowel index, and the 2ndword sliced from stored index appended to end

split str into elements
if splitStr.length === 2
    call auxiliary function with only the first two arguments: splitStr[0], splitStr[1]
if splitStr.length === 3
    call auxiliary function with only the first two arguments: splitStr[0], splitStr[2], splitStr[1]
if splitStr.length greater than 3, or less than 2 return "No spoons here";


*/

function cutBeggining(firstWord, secondWord, middleWord){
    const vowels = /[aeiou]/i;
    const firstVowel = firstWord.split('').findIndex(elem=> elem.match(vowels));
    const secondVowel = secondWord.split('').findIndex(elem=> elem.match(vowels));
    return middleWord ? 
    `${secondWord.slice(0, secondVowel) + firstWord.slice(firstVowel)} ${middleWord} ${firstWord.slice(0, firstVowel) + secondWord.slice(secondVowel)}` :
    `${secondWord.slice(0, secondVowel) + firstWord.slice(firstVowel)} ${firstWord.slice(0, firstVowel) + secondWord.slice(secondVowel)}`;
}

function spoonerise(str){
    const splitStr = str.split(' ');
    if(splitStr.length === 2){
        return cutBeggining(splitStr[0], splitStr[1]);
    }
    if(splitStr.length === 3){
        return cutBeggining(splitStr[0], splitStr[2], splitStr[1]);
    }
    if(splitStr.length >3 || splitStr.length<2){
        return "No spoons here";
    }
}


console.log(spoonerise("Dental Receptionist"))
console.log(spoonerise("crushing blow"))
console.log(spoonerise("strong wrangler"))
console.log(spoonerise("flipping the channel"))