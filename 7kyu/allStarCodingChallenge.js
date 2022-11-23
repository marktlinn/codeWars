/*
Link:
5865cff66b5699883f0001aa
This Kata is intended as a small challenge for my students
All Star Code Challenge #22
Create a function that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.
Any remaining seconds left over are ignored.
Note:
The string output needs to be in the specific form - "X hour(s) and X minute(s)"
    For example:
    3600 --> "1 hour(s) and 0 minute(s)"
    3601 --> "1 hour(s) and 0 minute(s)"
    3500 --> "0 hour(s) and 58 minute(s)"
    323500 --> "89 hour(s) and 51 minute(s)"
\\\\pseudocode////
created an object to store hours and minutes
take the seconds and convert to minutes by dividing by 60, rounding down.
run a loop while minutes is greater than 0:
    while minutes is greater than 60 increase the hours in the object by 1 and minue 60 frmo minutes
    while minutes are greater than 0 and less than 60 add minutes to minutes in obj and remove ttl minutes from minutes varable to exit loop.
return the results of the object

*/

function toTime(seconds) {
    const time ={
        hours: 0,
        minutes: 0
    };
    let minutes = Math.floor(seconds/60);
    while(minutes >0){
        if(minutes >= 60){
            time.hours = time.hours+1;
            minutes-=60;
        }
        else{
            time.minutes = time.minutes+minutes;
            minutes-=minutes;
        }
    }
    return `${time.hours} hour(s) and ${time.minutes} minute(s)`;
}

console.log(toTime(3600))//'1 hour(s) and 0 minute(s)');
console.log(toTime(3601))//'1 hour(s) and 0 minute(s)');
console.log(toTime(3500))//'0 hour(s) and 58 minute(s)');
console.log(toTime(323500))//'89 hour(s) and 51 minute(s)');
console.log(toTime(0))//'0 hour(s) and 0 minute(s)');  