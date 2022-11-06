/*
Link:
https://www.codewars.com/kata/54207f9677730acd490000d1/train/javascript

Create the function that converts a given string into an md5 hash. The return value should be encoded in hexadecimal.
Remember that you can include the builtin require() function to include external modules (you're not expected to implement MD5 hash algorithm yourself, there are many modules that can do that for you).
If you're not familiar with modules, see this kata.
NodeJS documentation here.
    Code Examples
        passHash("password") // --> "5f4dcc3b5aa765d61d8327deb882cf99"
        passHash("abc123") // --> "e99a18c428cb38d5f260853678922e03"
\\\pseudocode/plan///
use the crypto module
create a 'md5' hash, update the value of str and digest i.e. encode in hexidecimal.

*/

const crypto = require('crypto')

function passHash(str) {
  const hash = crypto.createHash('md5').update(str).digest('hex');
  return hash;
}

console.log(passHash('password'))
console.log(passHash('abc123'))
