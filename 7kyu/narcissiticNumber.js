function narsNum(n){
    const splitUpNum = String(n).split('')
    const power = splitUpNum.length
    const total = splitUpNum.reduce((acc, curr)=> {
        acc += Number(curr)**power
        return acc;
    }, 0)
    return total === n? true: false;
}

console.log(narsNum(370))