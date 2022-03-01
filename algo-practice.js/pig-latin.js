// From JavaScript Algorithms and Data Structures >> Intermediate Algorithm Scripting
// Exercise link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin


function translatePigLatin(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let localStr = str;
  const localStrArr = str.split('');

  const firstLetter = localStr.split('').shift()
  // console.log(firstLetter);

  const hasVowels = localStrArr.filter(letter => vowels.includes(letter)).length > 0; // returns T/F
  // define consonant cluster at start of word

  let consCluster = "";
  for (let i = 0; !vowels.includes(localStr[i]); i++){
    consCluster += localStrArr[i];
  }

  console.log(consCluster);
  


// if hasVowels, check for vowel at wordstart
  if (hasVowels){
    if (vowels.includes(localStr[0])){
      console.log(`${localStr} starts with a vowel`);
      localStr += "w";
    } else {
      console.log(`${localStr} does NOT start with a vowel`);
      const mainWord = localStrArr.slice(1).join('') + firstLetter;
      localStr = mainWord;
    } 
  } 
    console.log(`${localStr} does not have ANY vowels`);
    localStr += "ay"
  

  return localStr;

}


// console.log(translatePigLatin("consonant"));
// console.log(translatePigLatin("eight"));
console.log(translatePigLatin("schwartz"));
// console.log(translatePigLatin("rhythm"));

