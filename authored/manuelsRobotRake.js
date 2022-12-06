/*
Story:
It's just turned Autumn and a new proud homeowner 'Manuel' is outside trying to keep his lawn pristine. He wants to rake up all the leaves that have come off the trees.

He recently bought a new robotic rake which will rake up all the leaves for him, but he needs help programming it first. The robotic rake doesn't know the difference between leaves, garden ornaments, garden gnomes, or even the neighbour's cat: without proper programming it'll just rake up everything on the lawn and bin it.

Task:
Your job is to help Manuel program his robotic rake to only rake up and dispose of the leaves.
You'll be given an array to represent Manuel's Lawn. 
Things on the lawn will be represented by the following letters:
  ```
  • Leaves = 'L' || 'l'
  • Neighbour's cat = 'C' || 'c'
  • Garden Gnomes = 'G' || 'g'
  • Furniture = 'F' || 'f'
  ```
You need to collect each leaf and return an object showing how many leaves were picked and are now in the bin e.g.

  ```
    {bin: 34}
  ```

**• All the elements of the array will be strings.** 
<br/>
**• The string elements will sometimes be a singular letter and other times mixed multiple letter.**
zbr />
**• Letters can be both uppercase and lowercase**
  
Example:
```
ManuelsLawn = ['CgFllL', 'G', 'llLLl', 'cCgL']
```
Expected return from the above:
```
{bin: 9}
```
*/

const manuelsLawn = ["CgFllL", "G", "llLLl", "cCgL"];
const manuelsLawn1 = ["C", "LF", "", "llCGFl", "fcgl"];
const manuelsLawn2 = ["fcc", "fc", "ccccc", "gLlcff"];
const manuelsLawn3 = ["fFF", "Gf", "CCLffCFL", "cLLgll"];
const manuelsLawn4 = ["lllll", "LFGGG", "gGcllllllLLLGCCgGcLL", "LllGlLL"];
const manuelsLawn5 = ["LLLLLlll", "C", "GGlllGgLLl", "cLclLcFffff"];
const manuelsLawn6 = ["f", "c", "ll", "fg"];
const manuelsLawn7 = [
  "f",
  "LLFLggFLlll",
  "ll",
  "fg",
  "llFFl",
  "Ccllg",
  "llll",
  "LLLLLlll",
  "C",
  "GGlllGgLLl",
  "cLclLcFffff",
];
const manuelsLawn8 = [
  "f",
  "LLLLGflll",
  "ll",
  "fg",
  "lll",
  "Ccllg",
  "fcc",
  "fc",
  "ccccc",
  "gLlcff",
];
const manuelsLawn9 = [
  "fcc",
  "fc",
  "ccccc",
  "gLlcff",
  "lllll",
  "LFGGG",
  "gGcllllllLLLGCCgGcLL",
  "LllGlLL",
  "fGGf",
];

// function robotRake(manuelsLawn) {
//   const bin = { bin: 0 };
//   manuelsLawn.forEach(elem =>
//     elem.split('').forEach(item => (item.match(/l/gi) ? bin.bin++ : null))
//   );
//   return bin;
// }
//Improved function:
function robotRake(ManuelsLawn) {
  let leaves = ManuelsLawn.join("").match(/[Ll]/g);
  if (leaves === null) {
    return {
      bin: 0,
    };
  }
  return {
    bin: leaves.length,
  };
}

console.log(robotRake(["l"]));
// console.log(robotRake(manuelsLawn)); // => 9
// console.log(robotRake(manuelsLawn1)); // => 5
// console.log(robotRake(manuelsLawn2)); // => 2
// console.log(robotRake(manuelsLawn3)); // => 6
// console.log(robotRake(manuelsLawn4)); // => 23
// console.log(robotRake(manuelsLawn5)); // => 17
// console.log(robotRake(manuelsLawn6)); // => 2
// console.log(robotRake(manuelsLawn7)); // => 2
// console.log(robotRake(manuelsLawn8)); // => 2
// console.log(robotRake(manuelsLawn9)); // => 2

//All test cases: Updated
/*
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("robotRake", function() {
  it("given ['CgFllL', 'G', 'llLLl', 'cCgL']", function() {
    assert.deepEqual(robotRake(['CgFllL', 'G', 'llLLl', 'cCgL']), {bin: 9});
  });

  it("given ['C', 'LF', '', 'llCGFl', 'fcgl']", function() {
    assert.deepEqual(robotRake(['C', 'LF', '', 'llCGFl', 'fcgl']), {bin: 5});
  });
  
  it("given ['fcc', 'fc', 'ccccc', 'gLlcff']", function() {
    assert.deepEqual(robotRake(['fcc', 'fc', 'ccccc', 'gLlcff']), {bin: 2});
  });
  
  it("given ['fFF', 'Gf', '', 'CCLffCFL', '', 'cLLgll']", function() {
    assert.deepEqual(robotRake(['fFF', 'Gf', 'CCLffCFL', 'cLLgll']), {bin: 6});
  });
  
  it("given ['lllll', 'LFGGG', 'gGcllllllLLLGCCgGcLL', 'LllGlLL']", function() {
    assert.deepEqual(robotRake(['lllll', 'LFGGG', 'gGcllllllLLLGCCgGcLL', 'LllGlLL']), {bin: 23});
  });
  
  it("given ['LLLLLlll', 'C', 'GGlllGgLLl', '', 'cLclLcFffff']", function() {
    assert.deepEqual(robotRake(['LLLLLlll', 'C', 'GGlllGgLLl', 'cLclLcFffff']), {bin: 17});
  });
  
  it("given ['f', 'c', 'll', 'fg']", function() {
    assert.deepEqual(robotRake(['f', 'c', 'll', '', 'fg']), {bin: 2});
  });
  
  it("given ['f','LLFLggFLlll','ll','fg','llFFl','Ccllg','llll','LLLLLlll','C','GGlllGgLLl','cLclLcFffff']", function() {
    assert.deepEqual(robotRake(['f','LLFLggFLlll','ll','fg','llFFl','Ccllg','llll','LLLLLlll','C','GGlllGgLLl','cLclLcFffff']), {bin: 35});
  });
  
  it("given ['f','LLLLGflll','ll','fg','lll','Ccllg','fcc','fc','ccccc','gLlcff']", function() {
    assert.deepEqual(robotRake(['f','LLLLGflll','ll','fg','lll','Ccllg','fcc','fc','ccccc','gLlcff']), {bin: 16});
  });
  
  it("given ['fcc', '', 'fc','ccccc','gLlcff','lllll', '', 'LFGGG','gGcllllllLLLGCCgGcLL','LllGlLL','fGGf']", function() {
    assert.deepEqual(robotRake(['fcc','fc','ccccc','gLlcff','lllll','LFGGG','gGcllllllLLLGCCgGcLL','LllGlLL','fGGf']), {bin: 25});
  });
  it("given []", function() {
    assert.deepEqual(robotRake([]), {bin: 0});
  });
  it("given ['', '', '', '', '']", function() {
    assert.deepEqual(robotRake(['', '', '', 0, '', 'haha']), {bin: 0});
  });
    it("given ['haha']", function() {
    assert.deepEqual(robotRake(['', NaN,, {}, '',]), {bin: 0});
  });
  it("given ['l']", function() {
    assert.deepEqual(robotRake(['l']), {bin: 1});
  });
    it("given ['f']", function() {
    assert.deepEqual(robotRake(['f']), {bin: 0});
  });
});

describe('robotRake', () => {
  it('should return the correct number of leaves in the bin for a given array of strings', () => {
    let ManuelsLawn = ['CgFllL', 'G', 'llLLl', 'cCgL'];
    assert.deepEqual(robotRake(ManuelsLawn),{ bin: 9 });

    ManuelsLawn = ['CgFf', 'G', 'Cg', 'cCg'];
    assert.deepEqual(robotRake(ManuelsLawn),{ bin: 0 });

    ManuelsLawn = ['CgFllL', '', 'G', 'llLLl', 'cCgL', ''];
    assert.deepEqual(robotRake(ManuelsLawn),{ bin: 9 });
  });
});
  
  describe("Random Test 1", function() {
  const randomNum = Math.floor(Math.random() * 40);
  const randomArrs = Math.floor(Math.random() * 10);

  const generateLs = (l, num) => {
    const arr = [];
    for (let i = 0; i < num; i++) {
      let letter;
      if (l % 2 === 0) letter = 'L';
      if (l % 2 !== 0) letter = 'l';
      arr.push(letter.repeat(l));
    }
    return arr;
  };
    const randomArray = generateLs(randomNum, randomArrs);

    it("given [randomArray]", function() {
      assert.deepEqual(robotRake(randomArray), {bin: randomNum*randomArrs})
    });
  })

describe('Random Test 2', () => {
  it('should return the correct number of leaves in the bin for a given array of strings', () => {
    for (let i = 0; i < 10; i++) {
      let ManuelsLawn = [];
      for (let j = 0; j < Math.floor(Math.random() * 10) + 1; j++) {
        let randomString = '';
        for (let k = 0; k < Math.floor(Math.random() * 10) + 1; k++) {
          randomString += (Math.random() < 0.5 ? 'CcGgFfLl' : '')[Math.floor(Math.random() * 8)];
        }
        ManuelsLawn.push(randomString);
      }

      let leaves = ManuelsLawn.join('').match(/[Ll]/g);
      let expectedResult = { bin: leaves ? leaves.length : 0 };
      assert.deepEqual(robotRake(ManuelsLawn), expectedResult);
    }
  });
});
*/
