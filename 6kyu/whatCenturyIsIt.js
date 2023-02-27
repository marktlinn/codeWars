/*
Link:
https://www.codewars.com/kata/52fb87703c1351ebd200081f
Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.
Examples
  "1999" --> "20th"
  "2011" --> "21st"
  "2154" --> "22nd"
  "2259" --> "23rd"
  "1124" --> "12th"
  "2000" --> "20th"

\\\\pseudocode////
take a slice of the first two elements of the year, increment by 1 and convert to a string
if the first digit isn't 1
  return the apprporiate ending for the send digit e.g. 1 = "st", 2 = "nd" etc...
in all other cases return the two incremented digits with "th"
*/

function whatCentury(year) {
  const century = String(Number(year.slice(0, 2)) + 1);
  if (century[0] !== "1") {
    if (century[1] === "1") return `${century}st`;
    if (century[1] === "2") return `${century}nd`;
    if (century[1] === "3") return `${century}rd`;
  }
  return `${century}th`;
}

console.log(whatCentury("1999")); //, "20th"
console.log(whatCentury("2011")); //, "21st"
console.log(whatCentury("2154")); //, "22nd"
console.log(whatCentury("2259")); //, "23rd"
console.log(whatCentury("1234")); //, "13th"
console.log(whatCentury("1023")); //, "11th"
console.log(whatCentury("2000")); //, "20th"
