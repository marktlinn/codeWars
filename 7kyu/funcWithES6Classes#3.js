/*
Link:
https://www.codewars.com/kata/56fbdda707cff41b68000de2/train/javascript
Task
Define the following classes.
I. Cuboid
  The object constructor for the class Cuboid should receive exactly three arguments in the following order: length, width, height and store these three values in this.length, this.width and this.height respectively.
  The class Cuboid should then have a getter surfaceArea which returns the surface area of the cuboid and a getter volume which returns the volume of the cuboid.
II. Cube
  only, its length, and use that value passed in to set this.length, this.width and this.height.
Hint: Make a call to super, passing in the correct arguments, to make life easier ;)
*/

class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  get surfaceArea() {
    console.log(this.length, this.width, this.height);
    return (
      2 *
      (this.width * this.length +
        this.width * this.height +
        this.height * this.length)
    );
  }
  get volume() {
    return this.length * this.width * this.height;
  }
}
class Cube extends Cuboid {
  constructor(length) {
    super(length);
    this.length = length;
    this.width = length;
    this.height = length;
  }
}
