/*
Link:
https://www.codewars.com/kata/583ea278c68d96a5fd000abd/train/javascript
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
Given the following input array:
*/
let list1 = [  
  { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' },
  { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
  { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' }
];
/*
Write a function that returns the array sorted alphabetically by the programming language. In case there are some developers that code in the same language, sort them alphabetically by the first name:
[ 
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
  { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' },
  { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
  { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' }
];
Notes:
The input array will always be valid and formatted as in the example above.
The array does not include developers coding in the same language and sharing the same name.

\\\\pseudocode/plan////
Loop through the list1 arr and organise first by programming language and then by firstName and return
*/

function sortByLanguage(list) {
    return list.sort((a,b)=>{
        // if (b.language> a.language) {
        //     return -1;
        // } else if (b.language < a.language) { 
        //     return 1;
        // }
        b.language> a.language ? -1 : 1
        a.firstName < b.firstName ? -1 : 1
        // if (a.firstName < b.firstName) { 
        //     return -1;
        // } else if (a.firstName > b.firstName) {
        //     return 1
        // } else { // nothing to split them
        //     return 0;
        // }
    })
}


console.log(sortByLanguage(list1))