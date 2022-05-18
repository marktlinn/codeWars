// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
// Notes:
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// EX scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

// function scramble(str1, str2) {
//     let copyStr = str1.split('');
//     // copyStr.push(str1)
//     const truthTest = [];
//     for (let letter of str2) {
//         if(copyStr.includes(letter)) {
//             truthTest.push(letter);
//             copyStr.splice(copyStr.indexOf(letter), 1);
//         }
//      }
//      if(str2.length > truthTest.length) return false
//      return true;
//    }

// function scramble(str1, str2) {
//     let copyStr = str1.split('');
//     let copyStr2 = str2.split('')
//     let counter = 0;
//         copyStr2.forEach(letter => {
//             if(copyStr.indexOf(letter) !==-1) {
//                 counter ++;
//                 copyStr.splice(copyStr.indexOf(letter), 1)
//             }
//         })

//         return str2.length > counter? false: true;
//     }

//first version
// function scramble(str1, str2){
//     const obj1 = {};

//     for (let letter of str1){
//         obj1[letter] === undefined? obj1[letter] = 1: obj1[letter]++;
//     }

//     for(let letter of str2){
//      if(obj1[letter] >=1) {
//         obj1[letter]--;
//         } else if(obj1[letter] === 0 || obj1[letter] === undefined) {
//             return false
//         }
//     }

//     return true;
// }


//improved version: changed the else if clause. Undefined > 0 = false, so this works for both conditions of the previous version.
function scramble(str1, str2){
    const obj1 = {};

    for (let letter of str1){
        obj1[letter] === undefined? obj1[letter] = 1: obj1[letter]++;
    }

    for(let letter of str2){
     if(obj1[letter] >=1) {
        obj1[letter]--;
        } else if(obj1[letter] > 0) {
            return false
        }
    }

    return true;
}

//    console.log(scramble('rkqodlw','world')); //true
//    console.log(scramble('cedewaraaossoqqyt','codewars')); //true
//    console.log(scramble('katas','steak')); // false
//    console.log(scramble('scriptjavx','javascript'),); // false
//    console.log(scramble('scriptingjava','javascript')); //true
//    console.log(scramble('scriptsjava','javascripts')); //true
//    console.log(scramble('javscripts','javascript')); //false
//    console.log(scramble('jscripts','javascript')); //false
//    console.log(scramble('aabbcamaomsccdd','commas')); //true
//    console.log(scramble('commas','commas')); //true