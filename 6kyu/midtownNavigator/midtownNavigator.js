/*
Link:
https://www.codewars.com/kata/59665001dc23af735700092b/train/javascript
Create a function that tells the user how to get around Midtown in Manhattan. The function should be able to help the user to get from one location in this area to another.

Streets run east-west. Street numbers increase as they move northward, from 1st street in Greenwich Village to 220th street in the Inwood section. Avenues run south-north, with numbers beginning on the east side of the island and increase to the west.

"The Encyclopedia of New York City" defines Midtown as extending from 34th Street to 59th Street (going northwards) and from 3rd Avenue to 8th Avenue (going westwards).

Streets are prefixed with E or W depending on if the adress is on the eastside or westside (East or West of 5th Avenue).

For example:

start = "8th Ave and W 38th St"
end = "7th Ave and W 36th St"

The code above should tell the user how to get from 8th Ave and W 38th St to 7th Ave and W 36th St. It should then output as a string how many blocks north/south, and then how many blocks east/west the user should travel.

start = "8th Ave and W 38th St"
end = "7th Ave and W 36th St"
output => "Walk 2 blocks south, and 1 blocks east"

start = "5th Ave and E 46th St"
end = "7th Ave and W 58th St"
output => "Walk 12 blocks north, and 2 blocks west"

Note: When the avenues are same, the direction of movement should be west and when the streets are same the direction should be north.

*/

/*
Pseudocode:
***provided the string is always of the same format***
Take in the string of directions and parse the two (both start and end)
  take out the numbers of the start location and end location and store them in two objects
Declare two objects to have the "block" and "direction" properties for northSouth & westEast
After the numbers are parsed form the start and end locations
  if the startLocation avenue num is less than the endLocation avenue
    subtract the startLocation from the endLocation and give it to westOrEast as the blocks value & "west" as the value for the direction property
  else do the opposite: subtract endLocation and set direction property to "east"
  Apply the same processing to the westSouth variable
return a string `Walk NUMBER blocks DIRECTION, and NUMBER blocks DIRECTION` using string interpolation to output the appropriate values from the  NorthSouth & westEast objects created
*/

// start = "8th Ave and W 38th St"
// end = "7th Ave and W 36th St"
// output => "Walk 2 blocks south, and 1 blocks east"

function midtownNav(start, end) {
  const startLocation = {
    avenue: start.slice(0, 1),
    street: start.slice(14, 16),
  };
  const endLocation = {
    avenue: end.slice(0, 1),
    street: end.slice(14, 16),
  };
  const northOrSouth = { blocks: 0, direction: "north" };
  const westOrEast = { blocks: 0, direction: "west" };

  if (startLocation.avenue < endLocation.avenue) {
    westOrEast.blocks = endLocation.avenue - startLocation.avenue;
    westOrEast.direction = "west";
  } else if (startLocation.avenue > endLocation.avenue) {
    westOrEast.blocks = startLocation.avenue - endLocation.avenue;
    westOrEast.direction = "east";
  }

  if (startLocation.street < endLocation.street) {
    northOrSouth.blocks = endLocation.street - startLocation.street;
    northOrSouth.direction = "north";
  } else if (startLocation.street > endLocation.street) {
    northOrSouth.blocks = startLocation.street - endLocation.street;
    northOrSouth.direction = "south";
  }

  return `Walk ${northOrSouth.blocks} blocks ${northOrSouth.direction}, and ${westOrEast.blocks} blocks ${westOrEast.direction}`;
}

console.log(midtownNav("8th Ave and W 38th St", "7th Ave and W 36th St"));
// output => "Walk 2 blocks south, and 1 blocks east"

module.exports = midtownNav;
