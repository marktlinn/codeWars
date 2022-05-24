function rgb(){
    let result = ''
    let arrays = Array.from(arguments)
    console.log(arrays)
    const hexKey = {
      0:0,
      1:1,
      2:2,
      3:3,
      4:4,
      5:5,
      6:6,
      7:7,
      8:8,
      9:9,
      10:'A',
      11:'B',
      12:'C',
      13:'D',
      14:'E',
      15:'F'
    }
    arrays.forEach(digit=> {
        if (digit === 0 || digit < 0) {
            result += '00';
        } else if (digit >0 && digit<=255){
            let hexNum = Math.floor(digit/16);
            let remainderHex = (digit/16-Math.floor(digit/16))*16;
            result += String(hexKey[hexNum]);
            result += String(hexKey[remainderHex])
            console.log(result)
            console.log(remainderHex)
        } else {
            result +=  'FF';
        }
    })
    return result
  }
   console.log(rgb(173, 255, 47)) 
