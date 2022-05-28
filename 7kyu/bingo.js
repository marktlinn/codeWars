// const bingoNums = [2,9,14,7,15]

// function bingo(array){
//     counter= 0;
//     array.forEach((num)=> {
//         if(array.indexOf(num) === -1){
//             return
//         } counter++;
//     })
//     return counter ===5? 'WIN': 'LOSE'
//  }

function bingo(array){
    const bingoNums = [2,9,14,7,15];
    return bingoNums.every(e=> array.includes(e))? 'Win': 'Lose'
}

console.log(bingo([2, 14, 2, 7, 9, 15]))