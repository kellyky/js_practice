function pairElement(str) {

  const getPairOf = letter => {
    switch (letter){
      case "A":
        return "T";
      case "T":
        return "A";
      case "C":
        return "G";
      case "G":
        return "C"
    }
  }

const dnaPairs = [];
for (let letter of str){
  dnaPairs.push([letter, getPairOf(letter)])
}
  return dnaPairs;
}

console.log(pairElement("GCG"));