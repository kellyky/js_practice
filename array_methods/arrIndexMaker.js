const someArray = ['ABCD', 'DEFG', 'HIJK', 'LMNO'];

// Version 1 - arrow function. indices still need to be converted to int from strings
const indexArr = arr => {
  let newArr = [];
  for (let index in arr) {
    newArr.push(parseInt(index));
  }
  return newArr;
} 

// Version 2 - regular? function. Indicies still need to be converted to int from strings
function indexArr (arr) {
  let indices = [];
  for (let index in arr) {
    indices.push(parseInt(index));
  }
  return indices;
}

// add optional `const indices = indexArr(someArray);`


// Version 3 - map/arrow. 
const indexArr = (arr).map((el, index) => {
  return index;
})


// 3b - map/arrow, more concise
const indexArr = (arr).map((el, index) => index);


