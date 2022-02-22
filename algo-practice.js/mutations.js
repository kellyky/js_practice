function mutations(arr) {
  // Assign variables for both elements in array & make them lowercase
  const [one, two] = arr.map(el => el.toLowerCase());

  // logging to console to check if it's what I want
  console.log(one);
  console.log(two);

  // loop through the letters of the second element "two"
  for (let letter of two){

    // check to see if the first element "one" contains the given letter from the second element 
    // no returns yet, just logging to console
    console.log(one.includes(letter));
  }

}

console.log(mutations(["hello", "Hello"]));


