function pairElement(str) {

  const getPairOf = letter => {
    switch (letter){
      case "A":
        return "T";
        break;
      case "T":
        return "A";
        break;
      case "C":
        return "G";
        break;
      case "G":
        return "C" 
        break;
    }
  }

const dnaPairs = [];
for (let letter of str){
  dnaPairs.push([letter, getPairOf(letter)])
}
  return dnaPairs;
}

console.log(pairElement("GCG"));