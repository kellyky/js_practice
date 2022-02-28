function getIndexToIns(arr, num) {
  
  const sortedArray = arr.sort((firstEl, secondEl) => firstEl - secondEl);

  if (sortedArray[0] == undefined){
      return 0;
  } 
  
  for (let i = 0; i < sortedArray.length; i++){
    if (sortedArray[i] >= num){
      return i; 
    }
  }

  return sortedArray.length;
  
}



console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30))
console.log(getIndexToIns([2, 5, 10], 15));
