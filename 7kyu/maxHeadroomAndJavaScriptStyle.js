/*
Link:
https://www.codewars.com/kata/52a47dd7e950edabfa000391/train/javascript
\\\\plan////
debugging: move the bracket up to the return line, otherwise it'll be ignored if on a separate line. Make sure both functions are returning objects.
*/
function getMax1()
{
  var max = {
   name: 'Max Headroom'
  }
  return max;
}

function getMax2()
{
  return (
    {name: 'Max Headroom'}
  )
}
