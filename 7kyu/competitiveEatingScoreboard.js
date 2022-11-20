/*
Link:
https://www.codewars.com/kata/571d2e9eeed4a150d30011e7/train/javascript
You are the judge at a competitive eating competition and you need to choose a winner!
There are three foods at the competition and each type of food is worth a different amount of points. Points are as follows:
    Chickenwings: 5 points
    Hamburgers: 3 points
    Hotdogs: 2 points
Write a function that helps you create a scoreboard. It takes as a parameter a list of objects representing the participants.
It should return "name" and "score" properties sorted by score; if scores are equals, sort alphabetically by name.
[
  {name: "Big Bob", score: 134},
  {name: "Habanero Hillary", score: 98}
]
\\\\pseudocode////
create an empty varable array = [];
loop through the object storing the name and total value form score.
    Use an auxiliary function to run through all values in the object on each loop,
    store the total score from each object value and times by the amount necessary. Return the results from the aux function
finally, return the results, running a sort by score. IF the scores are the same, sort by name.
Return in descending order.
*/

const whoAteWhat = [
    {name: "Billy The Beast", chickenwings: 17 , hamburgers: 7, hotdogs: 8},
    {name: "Habanero Hillary", chickenwings: 5 , hamburgers: 17, hotdogs: 11},
    {name: "Joey Jaws", chickenwings: 8, hamburgers: 8, hotdogs: 15},
    {name: "Big Bob" , chickenwings: 17, hamburgers: 7, hotdogs: 8}
];
function condensor(obj){
    let score = 0;
    score += obj.chickenwings*5
    score += obj.hamburgers*3
    score += obj.hotdogs*2
    return score;
}

function scoreboard(whoAteWhat){
    const result =  [];
    let index = 0;
    while(index<whoAteWhat.length){
        result.push({name: whoAteWhat[index].name, score: condensor(whoAteWhat[index])});
        index++;
    }
    return result.sort((a,b)=> {
        if(a.score === b.score){
            return a.name<b.name ? -1 : 1;
        }
        else{
            return b.score-a.score
        }
    });
}

console.log(scoreboard(whoAteWhat))