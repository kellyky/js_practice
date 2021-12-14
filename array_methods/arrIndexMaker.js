const someArray = ['ABCD', 'DEFG', 'HIJK', 'LMNO'];

// Version 1 - arrow function. 
const indexArr1 = arr => {
  let newArr = [];
  for (let index in arr) {
    newArr.push(parseInt(index));
  }
  return newArr;
} 

// Version 2 - regular? function.
function indexArr2 (arr) {
  let indices = [];
  for (let index in arr) {
    indices.push(parseInt(index));
  }
  return indices;
}

// Version 3 - map/arrow. 
const indexArr3 = (someArray).map((el, index) => {
  return index;
})


// Version 4 - map/arrow, more concise
const indexArr4 = someArray.map((el, index) => index);


// calling each of the above, respectively
console.log(indexArr1(someArray));
console.log(indexArr2(someArray));
console.log(indexArr3);
console.log(indexArr4);
