function getIndexToIns(arr, num) {
  const sortedArray = arr.sort((firstEl, secondEl) => firstEl - secondEl);
  console.log(sortedArray);

  for (let i = 0; i < sortedArray.length; i++){

    if (sortedArray[i] < num){
      return i;
    }
   
  }
  
}


// console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([2, 20, 10], 19));
