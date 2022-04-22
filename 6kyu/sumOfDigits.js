// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digital_root(n) {
    let stringDigit = String(n)
    let count = 0;
    for (let i = 0; i<stringDigit.length; i++) {
        count += Number(stringDigit[i]);
    }
    if(String(count).length===1) {
        return count;
    } else return digital_root(count);
}

  console.log(digital_root(132189))