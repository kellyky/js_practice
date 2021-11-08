// From Exercism: https://exercism.org/tracks/javascript/exercises/hamming

const compute = (dna, dna2) => {
  if (dna.length != dna2.length) {
    return "strands must be of equal length";
  }

  let hammingDistance = 0;

  for (let ch in dna) {
    dna.charAt(ch) != dna2.charAt(ch) ? hammingDistance++ : hammingDistance += 0;
  }

  return hammingDistance;
}

// console.log(compute('AATG', 'AAA'));
// console.log(compute('ggactgaaatctg', 'ggactgaaatctg'));
console.log(compute('GGACGGATTCTG', 'AGGACGGATTCT'));
