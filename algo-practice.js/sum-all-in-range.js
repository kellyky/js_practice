function sumAll(arr){
  const [small, big] = arr.sort((a, b) => a - b);

  let result = 0;
  for (let i = small; i <= big; i++){
    result += i;
  }

  return result;
}

console.log(sumAll([4, 1]));
console.log(sumAll([1, 4]));
console.log(sumAll([-1, 1]));
