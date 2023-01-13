/*
Link:
https://www.codewars.com/kata/525f0459fb9570f9ff00005d/train/javascript
Your friend saw the great work you did with keeping your user-names at bay in
now he'd like you to do (nearly) the same thing for his website, but as always, the devil is in the details.
He has troubles with users ending or starting in a ".", and his user-array is a flat array of user-email-pairs, like so:
  [ "foo", "foo@bar.com", "bar", "bar@foo.com", ".foo", "food@bar.com" ]
He is only interested in e-mailing the users and ask them to sign up again, so no need to keep the user-name, only e-mail addresses for the user-names that start or end with a "." should be returned. For the above array, the correct return-array would be

  [ "food@bar.com" ]
You have to use the filter-method of Javascript, which returns each element of the array for which the filter-method returns true. The second argument gives the index you're looking at and the third argument is the array itself

\\\\pseudocode////
Create a bool variable "dottedFound" to switch between false and true when a word fitting the criteria (starting or ending with a "." is found)

filter the logins array, 
  if dottedFound === true
    return the word and switch the value of the bool to false
  else if the word begins or ends with "."  switch the value of the bool to true
return the filtered array.
*/

function searchNames(logins) {
  let dottedFound = false;
  return logins.filter(word => {
    if (dottedFound === true) {
      dottedFound = false;
      return word;
    }
    if (word[0] === "." || word[word.length - 1] === ".") {
      dottedFound = true;
    }
  });
}

console.log(searchNames(["foo", "foo@foo.com", "bar.", "bar@bar.com"])); // ,[ "bar@bar.com" ])
