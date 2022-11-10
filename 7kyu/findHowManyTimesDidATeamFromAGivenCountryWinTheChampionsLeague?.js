/*
Link:
https://www.codewars.com/kata/581b30af1ef8ee6aea0015b9/train/javascript
Create a function that takes two arguments:
    An array of objects which feature the season, the team and the country of the Champions League winner.
    Country (as a string, for example, 'Portugal')
You function should then return the number which represents the number of times a team from a given country has won. Return 0 if there have been no wins.
\\\\pseudocode////
create an empty obj
map over the array of objects, 
    if the country matches element.country
        if elem.country is in the object, increment value by 1
        else initialise key value pairing in obj with value of 1
return obj.country if it exists, else return 0;

more simply, we could just filter the results for elem.country, getting an array and then just return the length of that array.
*/

const winnerList1 = [
    { season: '1996–97', team: 'Borussia Dortmund', country: 'Germany' },
    { season: '1997–98', team: 'Real Madrid', country: 'Spain' },
    { season: '1998–99', team: 'Manchester United', country: 'England' },
    { season: '1999–00', team: 'Real Madrid', country: 'Spain' },
    { season: '2000–01', team: 'Bayern Munich', country: 'Germany' },
    { season: '2001–02', team: 'Real Madrid', country: 'Spain' },
    { season: '2002–03', team: 'Milan', country: 'Italy' },
    { season: '2003–04', team: 'Porto', country: 'Portugal' },
    { season: '2004–05', team: 'Liverpool', country: 'England' },
    { season: '2005–06', team: 'Barcelona', country: 'Spain' },
    { season: '2006–07', team: 'Milan', country: 'Italy' },
    { season: '2007–08', team: 'Manchester United', country: 'England' },
    { season: '2008–09', team: 'Barcelona', country: 'Spain' },
    { season: '2009–10', team: 'Internazionale', country: 'Italy' },
    { season: '2010–11', team: 'Barcelona', country: 'Spain' },
    { season: '2011–12', team: 'Chelsea', country: 'England' },
    { season: '2012–13', team: 'Bayern', country: 'Germany' },
    { season: '2013–14', team: 'Real Madrid', country: 'Spain' },
    { season: '2014–15', team: 'Barcelona', country: 'Spain' },
    { season: '2015–16', team: 'Real Madrid', country: 'Spain' }
];

  

// function countWins(winnerList, country) {
//     const countryObj = {}
//     winnerList.map(item=> {
//         if(item.country === country){
//             return country in countryObj? 
//             countryObj[country] = countryObj[country]+1:
//             countryObj[country] = 1;
//         }
//     })
//     return countryObj[country] ? countryObj[country] : 0
// }

//A more succinct way of getting the result
function countWins(winnerList, country){
    return winnerList.filter(item=> item.country === country).length;
}
console.log(countWins(winnerList1, 'Spain'))