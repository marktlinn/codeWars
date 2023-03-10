/*
Link:

Third day at your new cryptoanalyst job and you come across your toughest assignment yet. Your job is to implement a simple keyword cipher. A keyword cipher is a type of monoalphabetic substitution where two parameters are provided as such (string, keyword). The string is encrypted by taking the keyword, dropping any letters that appear more than once. The rest of the letters of the alphabet that aren't used are then appended to the end of the keyword.

For example, if your string was "hello" and your keyword was "wednesday", your encryption key would be 'wednsaybcfghijklmopqrtuvxz'.

To encrypt 'hello' you'd substitute as follows,

              abcdefghijklmnopqrstuvwxyz
  hello ==>   |||||||||||||||||||||||||| ==> bshhk
              wednsaybcfghijklmopqrtuvxz

hello encrypts into bshhk with the keyword wednesday. This cipher also uses lower case letters only.

\\\\pseudocode////
Create an auxiliary function to loop through the keyword, convert it to lowerCase, check if each element is repeated, (keep count with an object of key value pairs), if it is repeated return nothing, else return the letter and increment the object value so it'll not be included again. Finally return the encrypted keyword

In the main function compare the alphabet to the encrypted keyword by index.
loop over the string provided
  if the current element is not a space, return the current elem's index from the encrytped keyword.
  else if it is a space return the space.
return the answer string. 
*/

function getKeyword(keyword) {
  const alphaArr = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };
  let crytoKeyword = keyword
    .toLowerCase()
    .split("")
    .map(elem => {
      if (alphaArr[elem] === 0) {
        alphaArr[elem] += 1;
        return elem;
      } else {
        return;
      }
    })
    .join("");
  for (elem in alphaArr) {
    if (alphaArr[elem] === 0) {
      crytoKeyword += elem;
    }
  }
  return crytoKeyword;
}

function keywordCipher(string, keyword) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const encryptedKeyword = getKeyword(keyword);
  let answer = "";
  for (let elem of string.toLowerCase()) {
    if (elem !== " ") {
      const alphaIndex = alphabet.indexOf(elem);
      answer += encryptedKeyword[alphaIndex];
    } else {
      answer += elem;
    }
  }
  return answer;
}

console.log(keywordCipher("hello", "wednesday")); //, "bshhk");)
console.log(keywordCipher("HELLO", "wednesday")); //, "bshhk");)
console.log(keywordCipher("Welcome home", "secret")); //, "wticljt dljt", "Expect 'Welcome home' to return 'wlfimhl kmhl'");)
