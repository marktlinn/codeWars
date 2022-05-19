/*Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.
A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:
your referral bonus, and
the price of a beer can*/

const beeramid = function(bonus, price) {
  //We want to calculate how many beers (@ price) we can buy for the bonus given.
  //We create a pyramid increasing in number by the square of the layer of the pyramid i.e. 1, 2, 3, 4, 5 etc.
  //Create variables for: cost and layers
  //Each layer consists of the square of the layer number e.g. layer 1 = 1*1, layer 2 = 2*2 etc
  // create a loop to iterate through the layer squared * the price :(i * i) * price
  // while the cost is lower than the bonus, layers are increased.
  //check the number of layers, if 0, return zero
  //check cost below or equal to bonus, if so return layers, else return layers-1;
  let cost = 0;
  let layers = 0;
  for(let i = 1; cost<bonus; ++i){
    cost += (i*i)*price
    layers++;
  }
  if(layers === 0) return 0;
  return cost <= bonus? layers: layers-1;
}

console.log(beeramid(5000, 3))