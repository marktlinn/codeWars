/*
Link:
https://www.codewars.com/kata/582a53ed261c2af9d200018c/train/javascript

Given the following input array:
  var list1 = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
  ];
write a function that adds the username property to each object in the input array:
  [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
      username: 'emilyn1990' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
      username: 'nore2000' }
  ]
The value of the username property is composed by concatenating:
    firstName in lower-case;
    first letter of the lastName in lower-case; and
    the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year. Please make sure that your function delivers the correct birth year irrespective of when it will be executed, for example it should also work correctly for a meetup organised in 10-years-time. The example above assumes that the function is run in year 2020.
Notes:
    The input array will always be valid and formatted as in the example above.
    Age is represented by a number which can be any positive integer.
    Lastname will always be one upper-cased letter followed by dot, e.g. 'N.'
    Order of the objects in the array should be maintained but order of the properties in the individual objects does not matter.
This kata is part of the Coding Meetup series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like: forEach, filter, map, reduce, some, every, find, findIndex. Other approaches to solving the katas are of course possible.


\\\\pseudocode////
***Cannot do local tests as the testing environment will have specific year values set which I don't know and therefore can't replicate***
Take the current date and then loop over the list of objects, for each element create a username property:  pass the current element's first name and last name (0th value only) all to uppercase + the current year - the age property of the given element
return the altered list.
*/

function addUsername(list) {
  const date = new Date();
  const year = date.getFullYear();
  list.username = `${list.firstname.toLowerCase()}${list.lastName[0].toLowerCase()}${
    year - list.age
  }`;
  return list;
}
