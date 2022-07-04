/*Write a function, which takes a non-negative integer (seconds)
 as input and returns the time in a human-readable format (HH:MM:SS)
HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)
You can find some examples in the test fixtures.*/

function humanReadable (seconds) {
    const timeCount= {
      hrs: 3600,
      mins: 60,
      secs: 1
    }
    let moments = {
      hrs: 0,
      mins: 0,
      secs: 0
    }
    for(let time in timeCount){
      while(seconds>=0 && seconds>=timeCount[time]){
        console.log(seconds)
        seconds-=timeCount[time]
        moments[time]+= 1
      }
    }
    if(String(moments.hrs).length<2){
      moments.hrs = `0${moments.hrs}`
    }
    if(String(moments.mins).length<2){
      moments.mins = `0${moments.mins}`
    }
    if(String(moments.secs).length<2){
      moments.secs = `0${moments.secs}`
    }
    return `${moments.hrs}:${moments.mins}:${moments.secs}`
  }
  
    console.log(humanReadable(3662))