function mutations(arr) {
  // Assign variables for both elements in array & make them lowercase
  const [one, two] = arr.map(el => el.toLowerCase());

  // logging to console to check if it's what I want
  console.log(one);
  console.log(two);

  // loop through the letters of the second element "two"
  for (let letter of two){

    // logging to see 
    console.log(letter);

  }

}


