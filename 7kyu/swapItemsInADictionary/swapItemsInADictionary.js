/*
Link:
https://www.codewars.com/kata/5a21e090f28b824def00013c/train/javascript

In this kata, you will take the keys and values of an object and swap them around.
You will be given a dictionary, and then you will want to return a dictionary with the old values as the keys, and list the old keys as values under their original keys.
For example, given the dictionary: {'Ice': 'Cream', 'Age': '21', 'Light': 'Cream', 'Double': 'Cream'},
you should return: {'Cream': ['Ice', 'Double', 'Light'], '21': ['Age']}
Notes:
    The dictionary given will only contain strings
    The dictionary given will not be empty
    You do not have to sort the items in the lists
*/

/*
Pseudocode:
initialise an empty object
loop through the items in the dictionary
  for each item create a key in the obj (if it doesn't already exist) and add the value of the current key in the dictionary
return the object
*/

function switchDict(dic) {
  const resultObject = {};
  for (const [val, key] of Object.entries(dic)) {
    const currentVal = resultObject[key];
    if (currentVal) {
      resultObject[key] = [...currentVal, val];
    } else {
      resultObject[key] = [val];
    }
  }
  return resultObject;
}

module.exports = switchDict;
