function pairElement(str) {

  // make function to get pair
  const getPair = letter => {
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
// console.log(getPair("A"))

// loop through string
const outerArr = [];
for (let letter of str){
  const subArr = [];
  // push letter to subarr
  subArr.push(letter, getPair(letter));
  // push letter's pair to subarr
  
  // push whole subarr to outerarr
  outerArr.push(subArr);
}

  return outerArr;
}

console.log(pairElement("GCG"));