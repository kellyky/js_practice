// From FreeCodeCamp: Intermediate Algorithm Scripting
// Directions: Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  // let newString = str.split(" ");
  
  let reverseThis = [];
  for (let i = str.length - 1; i >= 0; i--) {
    const letter = str[i];
    const capitalLetter = /[A-Z]/;

    if (capitalLetter.test(letter)){
      reverseThis.push(...[letter, " "]); 

    } else {
      reverseThis.push(letter);
    }
  }
  const reversedArr = reverseThis.reverse().join("");
  console.log(reversedArr);


  // return str.toLowerCase().split(" ").join('-');
}

// console.log(spinalCase('This Is Spinal Tap'));
// console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("thisIsSpinalTap"));
// console.log(spinalCase("myCar"));
