// Kata Task: How many deaf rats are there?
// Legend:
// P = The Pied Piper
// O~ = Rat going left
// ~O = Rat going right
// Example:
// ex1 ~O~O~O~O P has 0 deaf rats
// ex2 P O~ O~ ~O O~ has 1 deaf rat
// ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats

const countDeafRats = function(town) {
  const rats = /../g
  const [leftRats, rightRats] = town
  .replace(/[^O~P]/g, '')
  .split('P')
  .map(elem => elem.match(rats) || []);
return (
  leftRats.reduce((acc, rat) => acc + (rat === 'O~'), 0) +
  rightRats.reduce((acc, rat) => acc + (rat === '~O'), 0)
);
}

  console.log(countDeafRats("~O~O~O O~ P"))
  