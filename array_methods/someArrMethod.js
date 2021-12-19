// Part 1:
// Given an array, return only entries with a in each index
//
// Part 2:
// Refactor to iterate through 
//
// Part 3:
// Refactor to filter by which letter is more prevalent in each index

const theArray = ['aaa', 'aab', 'aba', 'baa', 'abb', 'bbb', 'bba', 'bab'] 
console.log(theArray);

// Part 1:

let newArr = theArray.filter(el => el[0] == 'a');

console.log('index 0 winners');
console.log(newArr);

let newerArr = newArr.filter(el => el[1] == 'a');

console.log('index 1 winners');
console.log(newerArr);

let newestArr = newerArr.filter(el => el[2] == 'a');
console.log('index 2 winners');
console.log(newestArr);


