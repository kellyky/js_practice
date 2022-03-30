function uniteUnique(...arr) {
  const unitedArr = arr.reduce((acc, thisArr) => acc.concat(thisArr));
  
  const uniqueArr = [];

  for (let item of unitedArr){    // loop thr
    if (!uniqueArr.includes(item)){
      uniqueArr.push(item);
    }
 
  }

  return uniqueArr;
   
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
