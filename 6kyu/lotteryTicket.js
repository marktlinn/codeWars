/*
Time to win the lottery!
Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.
Example ticket:
[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.
Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.
All inputs will be in the correct format. Strings on tickets are not always the same length.
\\\\Pseudocode/plan////
declare winCounter var to be 0
    loop through the array,
    each element is an array, split the numbers from the letters
        declare code = number
        within the elem loop through the letters and test if charCodeAt letter === code number
            if it does increment winCounter and break out of current loop to run the next
    finally
        if winCounter === win, return 'Winner!'
        else return 'Loser!'
*/

function bingo(ticket, win){
    let winCounter = 0;
    ticket.map(elem=> {
        const codeNum = elem[1];
        for(letter of elem[0]){
            if(letter.charCodeAt() === codeNum){
                winCounter++;
                break;
            }
        }
    })
    return winCounter >= win ? 'Winner!' : 'Loser!';
}

console.log(bingo([ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ], 1))