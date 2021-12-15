// Goal: From that array, create an array of 4 arrays ['AAAA', 'BBBB', 'CCCC', 'DDDD']

// The Starting array
const ABCD = ['ABCD', 'ABCD', 'ABCD', 'ABCD'];

// Creates new array of iteratores of each off array ABCD
const indices = ABCD.map((el, iterator) => iterator); 


const arrOfSlices = array => {
  let outerArr = [];

  for (let i in array) {
    for (let el of array) {
      outerArr.push(el[i]);
    }
  }
  const flattened = outerArr.flat();
  let newestArr = [];

  for (let x = 0; x < 16; x += 4) {
     y = x + 4;
    // const asdf = flattened.slice(x, y).join('');
    newestArr.push(flattened.slice(x, y).join(''));
  }

  return newestArr;
}

console.log(arrOfSlices(ABCD));















