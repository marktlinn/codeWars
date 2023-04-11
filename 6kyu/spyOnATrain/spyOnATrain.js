/*
Link:
https://www.codewars.com/kata/599cf86d01a4108584000064

Task
You are a spy. You lurk in the enemy's control zone. Your task is to get the length data of a railway, accurate to meters.
Although you have taken all kinds of technical measures, you still haven't finished your task.
Now, You can only use the last method: Take the train, record the sounds you hear, and then calculate the length of the railroad.
You will hear these voices:
1. 
  "呜呜呜". This is the whistle of the train when it comes in or out of the station.
  That is, When you hear the sound for the first time, the train leaves the
  station and goes into high speed; When you hear the sound for the second
  time, The train pulled into the station and goes into low speed. and so on.
2. 
  "哐当". This is the sound of the train hitting the railroad track.
  That is, Every time you hear it, the train advances 20 meters(high speed) 
  or 10 meters(low speed).
3. 
  Any other sound. These are all noise, please ignore them ;-)

Examples
  For sounds="呜呜呜 哐当 哐当 哐当 哐当 哐当 呜呜呜 哐当 哐当 哐当 哐当 哐当"
  The output should be 150. 

  For sounds="呜呜呜 哐当 哐当 哐当 哐当 哐当 呜呜呜 哐当 哐当 哐当 哐当 哐当 呜呜呜 哐当 哐当 哐当 哐当 哐当 呜呜呜 哐当 哐当 哐当 哐当 哐当"
  The output should be 300. 

  For sounds="呜呜呜 哐当 哐当 面包饮料矿泉水了啊 ，哐当 桶面火腿肠茶叶蛋了啊 哐当 哐当 呜呜呜 哐当 哐当 哐当北京站到了，下车的旅客请带好您的行李，准备下车 哐当 哐当"
  The output should be 150. 

*/

/*
Pseudocode:
Declare a boolean var to decide if the train is true=inHighSpeed or else false
Declare another var to hold the count in meters
  Everytime the train is at high speed and the appropriate sound is heard increment the count by 20, else by 10
*/

//Speed "呜呜呜"
//count "哐当"

function lengthOfRailway(sounds) {
  let highSpeed = false;
  let lengthCount = 0;
  for (let i = 0; i < sounds.length; i++) {
    if (sounds[i] === "哐" && sounds[i + 1] === "当") {
      if (highSpeed) {
        lengthCount += 20;
      } else lengthCount += 10;
    } else if (sounds.slice(i, i + 3) === "呜呜呜") {
      highSpeed = !highSpeed;
    }
  }
  return lengthCount;
}

module.exports = lengthOfRailway;
