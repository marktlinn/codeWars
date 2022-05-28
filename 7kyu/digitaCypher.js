function encode(str,  n){
    let result = []
    let nums = String(n);
    let counter = 0;
    let charCodes = str.split('').map((letter, i)=> {
        return Number(str.charCodeAt(i) -96);
    })
    for(let i =0; i<str.length; i++){
      
      if(counter<nums.length) {
        result.push(Number(Number(nums[counter]) + Number(charCodes[i])));
        counter++
      } else {
        counter = 0;
        result.push(Number(Number(nums[counter]) + Number(charCodes[i])));
        counter++;
        
      }
    }
   return result;
}