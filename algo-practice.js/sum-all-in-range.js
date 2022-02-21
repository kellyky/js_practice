function sumAll(arr){
  let [small, big] = arr;

  if (small > big){
    [big, small] = [small, big];
  }

  let result = 0;
  for (let i = small; i <= big; i++){
    result += i;
  }

  return result;
}

console.log(sumAll([4, 1]));
console.log(sumAll([1, 4]));
console.log(sumAll([-1, 1]));
