function chunkArrayInGroups(arr, size){
  // Logging to console, since I'm not sure where to start

  console.log(arr);
  console.log(arr.length);
  console.log(size);
  console.log(Math.ceil(arr.length / size));
  console.log(arr.length % size);

}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));   // should return [["a", "b"], ["c", "d"]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));  // [[0, 1, 2], [3, 4, 5], [6]]
