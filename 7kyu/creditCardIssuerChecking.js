/*
Link:
https://www.codewars.com/kata/5701e43f86306a615c001868/train/javascript
Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.
Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.
| Card Type  | Begins With          | Number Length |
|------------|----------------------|---------------|
| AMEX       | 34 or 37             | 15            |
| Discover   | 6011                 | 16            |
| Mastercard | 51, 52, 53, 54 or 55 | 16            |
| VISA       | 4                    | 13 or 16      |
Examples
getIssuer(4111111111111111) == "VISA"
getIssuer(4111111111111) == "VISA"
getIssuer(4012888888881881) == "VISA"
getIssuer(378282246310005) == "AMEX"
getIssuer(6011111111111117) == "Discover"
getIssuer(5105105105105100) == "Mastercard"
getIssuer(5105105105105106) == "Mastercard"
getIssuer(9111111111111111) == "Unknown"
\\\\pseudocode/plan////
convert number to a string to test length and check initial number
create conditionals on the above info and return the appropriate result
*/

function getIssuer(number) {
    const numStr = String(number);
    switch(true){
        case(numStr.length=== 16 && numStr.slice(0,4)=== '6011'):
            return 'Discover';
        case (numStr.length=== 15 && (numStr.slice(0,2) === '34' || numStr.slice(0,2) === '37')):
            return 'AMEX';
        case (numStr.length===16 && (+numStr.slice(0,2) >= 51 && +numStr.slice(0,2) <= 55)):
            return 'Mastercard';
        case ((numStr.length === 13 || numStr.length === 16) && numStr.slice(0,1) === '4'):
            return 'VISA';
        default:
            return 'Unknown';
    }
}

console.log(getIssuer(4111111111111111));
console.log(getIssuer(378282246310005));
console.log(getIssuer(9111111111111111));
console.log(getIssuer(341111111111111));