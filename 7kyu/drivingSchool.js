/*
Link:

Fast & Furious Driving School's (F&F) charges for lessons are as below:
Time 	Cost
Up to 1st hour 	$30
Every subsequent half hour** 	$10
** Subsequent charges are calculated by rounding up to nearest half hour.

For example, if student X has a lesson for 1hr 20 minutes, he will be charged $40 (30+10) for 1 hr 30 mins and if he has a lesson for 5 minutes, he will be charged $30 for the full hour.

Out of the kindness of its heart, F&F also provides a 5 minutes grace period. So, if student X were to have a lesson for 65 minutes or 1 hr 35 mins, he will only have to pay for an hour or 1hr 30 minutes respectively.

For a given lesson time in minutes (min) , write a function cost to calculate how much the lesson costs. Input is always > 0.

\\\\pseudocode////
subtract the 5min grace period from the mins and store in a time var
declare a firstHour var to be a bool set to false
declare a price var init at 0

while time > 0
  if !== firstHour
    if time > 60
      increment price by 30, set Firsthour to true and decrement time by 60
    else return 30;
  else decrement time by 30 and increment price by 10
return price
*/

function cost(mins) {
  let time = mins - 5;
  let firstHour = false;
  let price = 0;
  while (time > 0) {
    if (firstHour === false) {
      if (time > 60) {
        time -= 60;
        price += 30;
        firstHour = true;
      } else {
        return 30;
      }
    } else {
      time -= 30;
      price += 10;
    }
  }
  return price;
}

console.log(cost(45)); //,30);
console.log(cost(63)); //,30);
console.log(cost(84)); //,40);
console.log(cost(102)); //,50);
console.log(cost(273)); //,100);
console.log(cost(44)); //,30)
