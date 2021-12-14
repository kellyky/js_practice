// The Starting array
const ABCD = ['ABCD', 'ABCD', 'ABCD', 'ABCD'];
console.log(ABCD);

// Builds an array of the indices of an array
const indexArr = arr => {
  let newArr = [];
  for (let i in arr) {
    newArr.push(parseInt(i));
  }
  return newArr;
} 

// Builds an array of the indices of an array
// function indexArr (arr) {
//   let indices = [];
//   for (let index in arr) {
//     indices.push(parseInt(index));
//   }

//   return indices;
// }

const indices = indexArr(ABCD);
console.log(indices);





// const indArr = (ABCD).map((el, index) => { 
//   return index;
// })

// const indArr = (ABCD).map((el, index) => index);
// console.log(indArr);


// console.log(indArr(someArr));




// Goal: From that array, create an array of 4 arrays ['AAAA', 'BBBB', 'CCCC', 'DDDD']


// function arrFilter (ABCD, [...indexArr]) {
//   let filteredArr = [];
//   for (let el of array) {
//     filteredArr.push(el[indexArr]); 
//   }
//   return filteredArr;



// }

// console.log(arrFilter(ABCD));






// console.log('\n');
// console.log('\n');
