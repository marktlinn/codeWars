/*
Link: https://www.codewars.com/kata/56ff9b53140fcca90b000530/javascript

Objective

Preloaded for you is a class Dog:
  see in code
You are then given a working class Labrador as your initial code.
class Labrador {
  constructor(name, age, gender, master) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = "Labrador";
    this.legs = 4;
    this.size = "Large";
    this.master = master;
    this.loyal = true;
  }
}
Shorten it so that it meets the strict character count requirements for this Kata.
Quick, get your timer out and get ready to time yourself. Are you ready? Ready, get set, GO!!! :D

\\\\pseudocode////
To make it shorter, just extend the Dog class, we can call the constructur and with all common properties and then use the Super keyword inside with the shared properties and call the specifics taht we wish to set for the Labrador class.
*/
class Dog {
  constructor(name, age, gender, species, size, master, loyal) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = species;
    this.legs = 4;
    this.size = size;
    this.master = master;
    this.loyal = loyal;
  }
}

class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, "Labrador", "Large", master, true);
  }
}
