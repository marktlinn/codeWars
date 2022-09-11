/*
Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead a normal life, with other activities. But he just can't stop solving all the kata!!
Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:
kata = 5
Petes kata = 10
life = 0
eating = 1
The Misery Score is the total points gained from the array. Once you have the total, return as follows:
< 40 = 'Super happy!'
< 70 >= 40 = 'Happy!'
< 100 >= 70 = 'Sad!'
> 100 = 'Miserable!'

\\\\\\Pseudocode/code//////
store the points criteria in a var
create an empty var to store the score
loop through x
    if the element of x matches a key from criteria increment score by the value
The use a switch statement to determine the output value
*/
function paul(x){
    const miseryResults = {'kata': 5, 'Petes kata': 10, 'life': 0, 'eating': 1}
    score = 0;
    x.forEach(elem=> {
        if(elem in miseryResults){
            score+= miseryResults[elem]
        }
    })
    switch(true){
        case (score<40):
            return 'Super happy!';
        case score >= 40 && score <70:
            return 'Happy!';
        case (score >= 70 && score <100):
            return  'Sad!';
        case (score > 100):
            return 'Miserable!'
        default:
            return score;
    }
}

console.log(paul(["eating","Petes kata","life","kata","Petes kata","Petes kata","Petes kata","eating","kata","kata","kata","life","life","life","life","Petes kata","kata","kata","eating","life","Petes kata","kata","eating","eating","eating","kata"]))