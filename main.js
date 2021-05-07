const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      const indexToChange = Math.floor(Math.random() * dna.length);
      const indexToReplace = Math.floor(Math.random() * dna.length);
      while (dna[indexToChange] === dna[indexToReplace]) {
        dna[indexToChange] = returnRandBase();
      }
      dna[indexToChange] = dna[indexToReplace]
      return dna;
    },
    compareDNA(additional) {
      let percentage = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === additional.dna[i]) {
          percentage++;
          }
        }
      let result = Math.floor((percentage / this.dna.length) * 100);
      console.log(`After comparing specimen ${this.specimenNum} with specimen ${additional.specimenNum} I find that the two have ${result}% of their DNA in common.`);
      },
      willLikelySurvive() {
        let percent = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === 'C' || this.dna[i] ==='G') {
            percent++
          }
        }
        let surviveOrNot = Math.floor((percent / this.dna.length) * 100);
        if (surviveOrNot >= 60) {
          return true;
        } else {
          return false;
        }
      },
      complementStrand() {
        let compStrand = [];
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] == 'A') {
            compStrand.push('T');
          } else if (this.dna[i] == 'T') {
            compStrand.push('A');
          } else if (this.dna[i] == 'C') {
            compStrand.push('G');
          } else if (this.dna[i] == 'G') {
            compStrand.push('C')
          } else {
            compStrand.push(returnRandomBase());
          }
        }
        console.log(this.dna);
        return compStrand;
      }
    }
  }

const survivalCensus = () => {
  let specimen = 0;
  let goodParents = [];
  let badParents = [];
  for (let i = 0; i <= 29; i++) {
    let sample = pAequorFactory(1, mockUpStrand());
    if (sample.willLikelySurvive) {
      goodParents.push(sample.dna);
      specimen++;
    } else {
      badParents.push(sample.dna);
      specimen++;
    }
  }
  return goodParents;
};

let fitToSurvive = survivalCensus();


let testGroup = pAequorFactory(1, mockUpStrand());
let testGroup2 = pAequorFactory(2, mockUpStrand());

//Mutate() Method
//console.log(testGroup.mutate());

//CompareDNA() Method
//testGroup.compareDNA(testGroup2);

//WillLikelySurvive() Method
//console.log(testGroup.willLikelySurvive());

//ComplementStrand() Method
//console.log(testGroup.complementStrand());

//SurvivalCensus() Function
//Generates 30 survivable instances
//console.log(fitToSurvive.length);
