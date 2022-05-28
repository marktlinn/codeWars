const bingoNums = [2,9,14,7,15]

function bingo(array){
    counter= 0;
    bingoNums.forEach((num)=> {
        if(array.indexOf(num) === -1){
            return
        } counter++;
    })
    return counter ===5? 'WIN': 'LOSE'
 }

console.log(bingo([2, 14, 2, 7, 9, 15]))