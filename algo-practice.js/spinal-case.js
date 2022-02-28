// From FreeCodeCamp: Intermediate Algorithm Scripting
// Directions: Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
// spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.


function spinalCase(str) {
  const localStr = str.replace(/(-|_)/g, " "); // replaces dashes and underscores with spaces  

  let holdingArrBackwards = []; 
  for (let i = localStr.length - 1; i >= 0; i--) {
    const char = localStr[i];
    const capitalLetter = /[A-Z]/;
    holdingArrBackwards.push(char);

    if (capitalLetter.test(char)){
      holdingArrBackwards.push(" ");
    } 
  }

  let endString = holdingArrBackwards.reverse().join('');
  endString = endString.replace(/\s\s/g, " ").trim();

  return endString.toLowerCase().split(" ").join('-');

}


console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));
