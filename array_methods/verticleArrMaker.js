// Goal: From that array, create an array of 4 arrays ['AAAA', 'BBBB', 'CCCC', 'DDDD']

// The Starting array
const ABCD = ['ABCD', 'ABCD', 'ABCD', 'ABCD'];

// Creates new array of iteratores of each off array ABCD
const indices = ABCD.map((el, iterator) => iterator); 


function arrayOfLetter (array, iterator = 0) {
  let outerArr = [];
  let innerArr = [];

  while (iterator < array.length){

    for (let el of array) {
      innerArr.push(el[iterator]);
    }
    iterator++;
  }
  outerArr.push(innerArr);
  return outerArr;

}

console.log(arrayOfLetter(ABCD, ...indices));

const arrayLetters = ((array) => {
  let outerArr = [];
  let innerArr = [];

  let iterator = 0;
  while (iterator < array.length) {
    for (let el of array) {
      innerArr.push(el[iterator]);
    }
    iterator++;
  }
  outerArr.push(innerArr);
  return outerArr;
})

console.log(arrayLetters(ABCD));


const anotherTry = array => {
  let outerArr = [];
  let innerArr = [];

  for (let i in array) {
    for (let el of array) {
      innerArr.push(el[i]);
    }
  }
  outerArr.push(innerArr);
  return outerArr;
}

console.log(anotherTry(ABCD));

const anotherGo = ABCD.map((el, arr) => {
  let outerArr = [];
  let innerArr = [];

  for (let i in arr) {
    innerArr.push(el[i]);
  }
  return outerArr;
})

console.log(anotherGo);






















