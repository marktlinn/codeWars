/*
Most football fans love it for the goals and excitement. Well, this Kata doesn't. You are to handle the referee's little notebook and count the players who were sent off for fouls and misbehavior.
The rules: Two teams, named "A" and "B" have 11 players each; players on each team are numbered from 1 to 11. Any player may be sent off the field by being given a red card. A player can also receive a yellow warning card, which is fine, but if he receives another yellow card, he is sent off immediately (no need for a red card in that case). If one of the teams has less than 7 players remaining, the game is stopped immediately by the referee, and the team with less than 7 players loses.
A card is a string with the team's letter ('A' or 'B'), player's number, and card's color ('Y' or 'R') - all concatenated and capitalized. e.g the card 'B7Y' means player #7 from team B received a yellow card.
The task: Given a list of cards (could be empty), return the number of remaining players on each team at the end of the game (as a tuple of 2 integers, team "A" first). If the game was terminated by the referee for insufficient number of players, you are to stop the game immediately, and ignore any further possible cards.
Note for the random tests: If a player that has already been sent off receives another card - ignore it.
\\\\pseudocode/plan////
if there are no cards return [11,11];
create 3 maps: 
    one to store the two teams of 11 players: A: 11 and B:11
    one to store the total sent off players
    one to store carded players
    loop through the elements in the array, split apart the team details, card type Y or R and the player details
        while both teams have a minimum of 7 players:
            if card is R and player doesn't already exists in sentOffPLayers, decrement the team's map number
            if card is yellow and player doesn't exist in cardedPlayers, add player to cardedPlayers;
            else if player in cardedPlayers, add player to sentOffPlayers and decrement the teams map number
        return each teams number of players.

*/

function menStillStanding(cards) {
    if(cards== false) return [11,11];
    const teams = new Map();
    const sentOffPlayers = new Map();
    const cardedPlayers = new Map();
    teams.set('A', 11);
    teams.set('B', 11);
    cards.forEach(elem=> {
        const team = elem[0];
        const card = elem[elem.length-1]
        const player = elem.slice(0,elem.length-1);
        if(!sentOffPlayers.has(player)){
            if(teams.get('A')<6 || teams.get('B')<7) return [teams.get('A'), teams.get('B')]
            if (card === 'R'){
                sentOffPlayers.set(player, player);
                let numOfPlayer = teams.get(team);
                teams.set(team, numOfPlayer-1)
            }
            else if (card === 'Y'){
                if(cardedPlayers.has(player)){
                    let numOfPlayer = teams.get(team);
                    sentOffPlayers.set(player, player)
                    teams.set(team, numOfPlayer-1)
                }
                else cardedPlayers.set(player, player)
            }
        }
    })
    return [teams.get('A'), teams.get('B')]
}
console.log(menStillStanding([
    'A7R',  'A2R',  'A3R',
    'B2R',  'B1Y',  'A10R',
    'A5Y',  'B4Y',  'B6Y',
    'B9R',  'B11Y', 'B1Y',
    'A10Y', 'B8R',  'A10R',
    'B1R',  'B11R', 'B10Y',
    'B5R',  'B11R'
  ]))
