/*Find the sum of the digits of all the numbers from 1 to N (both ends included).
e.g. if N = 5, we have to find the sum of 1+2+3+4+5 
*/
// create variable result to store sum of calculations
// loop through numbers from 0-n; if n is less than 10 add the numbers together., pass value to result.
//if number goes over 10, split the number into a string and use recude to calculate the sum of its elements as numbers
//with each loop pass the calculation of the number to result
//finally return result


function twistedSum(n) {
    let result = 0
    for(let i = 0; i<=n; i++){
        if(i<10){
            result+=i
        }
        else {
            let num = String(i).split('')
            let numCalc = num.reduce((a,b)=> (+a)+(+b))
            result+=numCalc
        }
    }
    return result
}

console.log(twistedSum(4956))
