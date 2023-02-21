/*
Link: 
https://www.codewars.com/kata/5e16ffb7297fe00001114824/train/javascript

You work in the best consumer electronics corporation, and your boss wants to find out which three products generate the most revenue. Given 3 lists of the same length like these:

    products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
    amounts: [3, 24, 8]
    prices: [199, 299, 399]

return the three product names with the highest revenue (amount * price).

Note: if multiple products have the same revenue, order them according to their original positions in the input list.

\\\\pseudocode////
create a Map object from the items with the index as the key and the value as price*amount
  go through the entries of the map and sort by value, then return only the first value of each key-value pair
  return a slice of the first three items/keys
*/

function top3(products, amounts, prices) {
  const prodObj = new Map();
  products.forEach((elem, i) => {
    prodObj.set(elem, amounts[i] * prices[i]);
  });
  return Array.from(prodObj.entries())
    .sort((a, b) => b[1] - a[1])
    .map(elem => elem[0])
    .slice(0, 3);
}

/*
////// For Codewars solution:
//An old version of node was being used, so the sort method wasn't stable
// so this code was added to provide a stable sort:

Array.prototype.stableSort = function(cmp) {
  cmp = cmp ? cmp : (a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  };
  const stabilizedThis = this.map((el, index) => [el, index]);
  const stableCmp = (a, b) => {
    let order = cmp(a[0], b[0]);
    if (order != 0) return order;
    return a[1] - b[1];
  }
  stabilizedThis.sort(stableCmp);
  for (let i=0; i<this.length; i++) {
    this[i] = stabilizedThis[i][0];
  }
  return this;
}

function top3(products, amounts, prices) {
  const prodObj = new Map();
  products.forEach((elem, i) => {
    prodObj.set(elem, amounts[i] * prices[i]);
  });
  return Array.from(prodObj.entries())
    .stableSort((a,b)=> b[1]-a[1])
    .map(elem => elem[0])
    .slice(0, 3);
}

*/

console.log(
  top3(
    ["Computer", "Cell Phones", "Vacuum Cleaner"],
    [3, 24, 8],
    [199, 299, 399]
  )
); //, ["Cell Phones", "Vacuum Cleaner", "Computer"]);
console.log(
  top3(
    [
      "Cell Phones",
      "Vacuum Cleaner",
      "Computer",
      "Autos",
      "Gold",
      "Fishing Rods",
      "Lego",
      " Speakers",
    ],
    [5, 25, 2, 7, 10, 3, 2, 24],
    [51, 225, 22, 47, 510, 83, 82, 124]
  )
); //, ['Vacuum Cleaner', 'Gold', ' Speakers']);
console.log(
  top3(
    [
      "Cell Phones",
      "Vacuum Cleaner",
      "Computer",
      "Autos",
      "Gold",
      "Fishing Rods",
      "Lego",
      " Speakers",
    ],
    [0, 12, 24, 17, 19, 23, 120, 8],
    [9, 24, 29, 31, 51, 8, 120, 14]
  )
); //, ['Lego', 'Gold', 'Computer']);

console.log(
  top3(
    ["one", "six", "two", "seven", "three", "four", "five"],
    [2, 1, 2, 1, 2, 2, 2],
    [2, 1, 2, 1, 2, 2, 2]
  )
);

console.log(
  top3(
    [
      "Cell Phones",
      "Vacuum Cleaner",
      "Computer",
      "Printer",
      "TVs",
      "Laptops",
      "Tablets",
      "Chargers",
      "Speakers",
      "Games",
      "Music CDs",
      "Radios",
      "Drones",
      "Scooter",
      "Keyboards",
      "Mouses",
    ],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
  )
);
