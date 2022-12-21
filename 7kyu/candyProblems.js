/*
Link:
https://www.codewars.com/kata/55466644b5d240d1d70000ba/train/javascript
Your job is to find out how much candy each child has, and give them each additional candy until they too have as much as the child(ren) with the most candy. You also want to keep a total of how much candy you've handed out because reasons."
Your job is to give all the kids the same amount of candies as the kid with the most candies and then return the total number candies that have been given out. If there are no kids, or only one, return -1.
In the first case (look below) the most candies are given to second kid (i.e second place in list/array), 8. Because of that we will give the first kid 3 so he can have 8 and the third kid 2 and the fourth kid 4, so all kids will have 8 candies.So we end up handing out 3 + 2 + 4 = 9.
  candies ([5,8,6,4]) // return 9
  candies ([1,2,4,6]) // return 11
  candies ([]) // return -1
  candies ([1,6]) // return 5
\\\\pseudocode////
check the length of the array, 
  if its length is less than or equal to 1 return -1
store the max num in a variable
  map over the kids array check if each element equals the maxNum, 
    if it doesn't return the maxNum - the elem's number
    else return 0 for that elem
  reduce the newly mapped array to return a single number

*/

function candies(kids) {
  if (kids.length <= 1) return -1;
  const maxNumber = Math.max(...kids);
  return kids
    .map(child => (child !== maxNumber ? maxNumber - child : 0))
    .reduce((ttl, curr) => (ttl += curr));
}
