function sumFibs(num) {
  let lastFib = 0;
  let thisFib = 1;
  let sum = 0;

  while (thisFib <= num){
    if (thisFib % 2 !== 0) sum += thisFib;
      
    const placeholder = thisFib;
    thisFib += lastFib;
    lastFib = placeholder;
  }

  return sum;

}


console.log(sumFibs(1));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(4));
console.log(sumFibs(75024));
console.log(sumFibs(75025));
// Tests:
// sumFibs(1) should return a number.
// sumFibs(1000) should return 1785.
// sumFibs(4000000) should return 4613732.
// sumFibs(4) should return 5.
// sumFibs(75024) should return 60696.
// sumFibs(75025) should return 135721.
