// Goal: From that array, create an array of 4 arrays ['AAAA', 'BBBB', 'CCCC', 'DDDD']

// The Starting array
const ABCD = ['ABCD', 'ABCD', 'ABCD', 'ABCD'];
console.log(ABCD);

// Creates new array of indexes of each off array ABCD
const indices = ABCD.map((el, index) => index); 
console.log(indices);

function arrayOfLetter (array, index = 0) {
  let theNewArr = [];
  let letterArr = [];

  while (index < array.length){
    for (let el of array) {
      letterArr.push(el[index]);
    }
    index++;
    }
    const entry = letterArr.join('');
    theNewArr.push(entry);
  return theNewArr;

}



console.log(arrayOfLetter(ABCD, ...indices));


