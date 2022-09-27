/*Task
Link: 
https://www.codewars.com/kata/5b6db1acb118141f6b000060/train/javascript
You will be given a list of objects. Each object has type, material, and possibly secondMaterial. The existing materials are: paper, glass, organic, and plastic.
Your job is to sort these objects across the 4 recycling bins according to their material (and secondMaterial if it's present), by listing the type's of objects that should go into those bins.
Notes
    The bins should come in the same order as the materials listed above
    All bins should be listed in the output, even if some of them are empty
    If an object is made of two materials, its type should be listed in both of the respective bins
    The order of the type's in each bin should be the same as the order of their respective objects was in the input list
Example
input = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]
output = [
  ["wine bottle", "amazon box", "beer bottle"],
  ["wine bottle", "beer bottle"],
  ["rotten apples", "out of date yogurt"],
  ["out of date yogurt"]
]
\\\\Pseudocode/plan////
create 4 varaibles for each material type, as empty arrays
loop through the objects, test what each material and secondMaterial is and push to the appropriate array
return an array of the arrays
*/
let a = [
    {type: 'rotten apples', material: 'organic'},
    {type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic'},
    {type: 'wine bottle', material: 'glass', secondMaterial: 'paper'},
    {type: 'amazon box', material: 'paper'},
    {type: 'beer bottle', material: 'glass', secondMaterial: 'paper'}
  ]

function recycle(array) {
    const organic = [];
    const glass = [];
    const paper = [];
    const plastic = [];
    for (let elem of array){
        if(elem.material === 'organic' || elem.secondMaterial === 'organic') organic.push(elem.type)
        if(elem.material === 'glass' || elem.secondMaterial === 'glass') glass.push(elem.type)
        if(elem.material === 'paper' || elem.secondMaterial === 'paper') paper.push(elem.type)
        if(elem.material === 'plastic' || elem.secondMaterial === 'plastic') plastic.push(elem.type)
    }

    return [[...paper], [...glass],[...organic], [...plastic]];
}

console.log(recycle(a))
