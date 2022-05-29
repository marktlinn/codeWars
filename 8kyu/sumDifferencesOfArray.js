function sumOfDifferences(arr) {
    let result = [];
    let arrg =arr.sort((a,b)=>b-a)
    if(arr.length <=1) return 0;
    for(let i=0; i< arr.length; i++){
        if(!isNaN(arrg[i] -arrg[i+1])){
            result.push(arrg[i] -arrg[i+1])
        }
    }
    return result.reduce((acc, num)=> acc+=num)
  }

  console.log(sumOfDifferences([10, 2, 1]))