function runningPace(distance, time){
    let arrOfTime = time.split(':')
    let totalTimeSeconds = (+arrOfTime[0]*60) + (+arrOfTime[1]);
    let secondsPerKM = String(Math.floor((totalTimeSeconds/distance)%60));
    let minutesPerKM = String(Math.floor((((totalTimeSeconds/distance))-secondsPerKM)/60));
    if(secondsPerKM === 0){
      return `${minutesPerKM}: 00`;
    } else if (secondsPerKM.length === 1){
      return `${minutePerKM}: 0${secondsPerKM}`;
    } else return `${minutesPerKM}:${secondsPerKM}`;
}
// console.log(runningPace(1, "3:15"));
// console.log(runningPace(5, "25:00"));
// console.log(runningPace(15, "75:00"));
// console.log(runningPace(2.51, "10:43"));
console.log(runningPace(4.99, "22:32")) //// "4:30");
console.log(runningPace(0.2, "0:38")) // "3:10");
console.log(runningPace(42.195, "122:57"))
