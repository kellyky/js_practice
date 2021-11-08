// From Exercism: https://exercism.org/tracks/javascript/exercises/hamming

const compute = (dna, dna2) => {
  if (dna.length != dna2.length) {
    return "strands must be of equal length";
  }

  let hammingDistance = 0;

  let index = 0;
  while ( index < dna.length ) {
    if (dna.charAt(index) != dna2.charAt(index)) {
      hammingDistance++;
    }
    index++;
  }

  return hammingDistance;
}

// console.log(compute('AATG', 'AAA'));
// console.log(compute('ggactgaaatctg', 'ggactgaaatctg'));
console.log(compute('GGACGGATTCTG', 'AGGACGGATTCT'));
