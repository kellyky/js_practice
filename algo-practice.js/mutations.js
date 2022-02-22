function mutations(arr) {
  // Assign variables for both elements in array & make them lowercase
  const [firstEl, secondEl] = arr.map(el => el.toLowerCase());

  // loop through the letters of the second element "secondEl"
  for (let letter of secondEl){
    // check to see if the first element "firstEl" contains the given letter from the second element 
    
    // console.log(firstEl.includes(letter));
    // ^ logs true/false for each letter in the loop
    // Checking for false's 
    if (!firstEl.includes(letter)){
      return false;
    }
  }
  return true;
}

console.log(mutations(["hello", "Hello"])); // true
console.log(mutations(["hello", "hey"])); // false
console.log(mutations(["Mary", "Army"])); // true
console.log(mutations(["Mary", "Aarmy"])); // true
