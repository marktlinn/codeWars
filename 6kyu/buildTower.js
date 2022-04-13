/*Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.
e.g. nFloors = 4;
   *
  ***
 *****
*******
*/

// version returning a string tower
// function towerBuilder(nFloors) {
//     let tower = '';
//     let spaceCounter = nFloors-1;
//     let blockCounter = 1;
//     let space = ' ';
//     let block = '*'
//     for (let i = 1; i<=nFloors; i++) {
//         tower +=`${space.repeat(spaceCounter) + block.repeat(blockCounter) + space.repeat(spaceCounter) }\n`;
//         spaceCounter -=1;
//         blockCounter +=2;
//     }
//     return tower;

//   }


// version returning the tower as an Array
  function towerBuilder(nFloors) {
    let tower = [];
    let spaceCounter = nFloors-1;
    let blockCounter = 1;
    let space = ' ';
    let block = '*'
    for (let i = 1; i<=nFloors; i++) {
        tower.push(`${space.repeat(spaceCounter) + block.repeat(blockCounter) +space.repeat(spaceCounter) }`);
        spaceCounter -=1;
        blockCounter +=2;
    }
    return tower;

  }