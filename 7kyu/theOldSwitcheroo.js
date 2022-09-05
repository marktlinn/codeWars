/*Write a function
vowel2index(str)
that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string. 
E.g: vowel2index('this is my string') == 'th3s 6s my str15ng'
vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
vowel2index('') == ''
Your function should be case insensitive to the vowels.
\\\\\\\\Pseudocode/plan////////
declare an empty string variable newStr
declare an empty index var
loop through str, add each element to newStr increment index by 1,
    if elem is a vowel, add the index+1 adn increment index by 1
return newStr
*/ 

function vowel2index(str) {
    let newStr = '';
    let index = 0;
    for(let elem of str){
        if(elem.match(/a|e|i|o|u/gi)){
            newStr+= index+1;
            index++
        } 
        else{
            newStr+=elem
            index ++;
        }
    }
    return newStr
}

console.log(vowel2index('this is my string'))
 
 