function chunkArrayInGroups(arr, size) {
  let newArr = [];
  
  for (let i = 0; i < arr.length; i++){
    let row = [];
    arr.slice();
    for (let j = 0; j < size; j++){
      
      row.push(arr[i]);
    }
     

    // row.push(arr[i]);
    newArr.push(row);
    
  }
  
  console.log(newArr);

}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
