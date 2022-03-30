function uniteUnique(...arr) {
  const uniqueArr = [];

  arr.flat().forEach(item => {
    if (!uniqueArr.includes(item)) uniqueArr.push(item)
  })
 
  return uniqueArr;
   
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
