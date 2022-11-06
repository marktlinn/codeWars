/*
Link:
https://www.codewars.com/kata/541db50c259d9c55c00007b9/train/javascript

We are going to replicate the kata Base64 Encoding, but instead of creating our own encoding / decoding functions, we will use NodeJS' Buffer module to do it for us.
Create the function String.prototype.toBase64 that encodes a string in Base64. Also create the function String.prototype.fromBase64 that decodes a Base64 string into utf8.
    Examples
    // should return 'dGhpcyBpcyBhIHN0cmluZyEh'
        'this is a string!!'.toBase64(); 
    // should return 'this is a string!!'
        'dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64();
Tips
To use a NodeJS module, you need to require it into your code. For example, if I wanted to use the util module, I could write
//require the 'util' module into your code
var util = require('util')
console.log(util.isRegExp(/hi/)) 
The NodeJS built-in function require knows exactly how to find the module, so no extra work is needed. After you have required a module into your code, you can use any of the methods / properties for it.
The NodeJS documentation is helpful, so I suggest you look at that. If you plan on working with NodeJS at all in the future, it is beneficial to know what features it has built-in.
\\\pseudoCode///
import the buffer module
    toBase64, return a buffer from the value it is called on (this) . toString of base64
    fromBase64 return a buffer from the value, which is base64, to a string of utf8 type
*/



const { Buffer } = require('node:buffer');

String.prototype.toBase64 = function() {
  return Buffer.from(this).toString('base64')
}

String.prototype.fromBase64 = function() {
  console.log(this)
  return Buffer.from(this, 'base64').toString('utf8')
}

console.log('this is a string!!'.toBase64())
console.log('dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64());