/*Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number. */

function descendingOrder(n){
    if (n > 0) {
      const nString = String(n);
      const nArr =  [];
        for (elem of nString) {
          nArr.push(elem);
        }
            return Number(nArr.sort()
                              .reverse()
                              .join(''));
    }
    return 0;
  }