

function DNAStrand(dna){
    const dnaKey = {
      A: 'T',
      T: 'A',
      G: 'C',
      C: 'G'
    }
    let letters = dna.split('');
    let dnaOutput = ''
    for (elem of letters) {
      dnaOutput += (dnaKey[elem]);
    }
  
    return dnaOutput;
  
  }