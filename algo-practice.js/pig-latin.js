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



// if hasVowels, check for vowel at wordstart
  if (hasVowels){
    if (vowels.includes(localStr[0])){
      localStr += "w";
    } else {
    let consCluster = "";
    for (let i = 0; !vowels.includes(localStr[i]); i++){
      consCluster += localStrArr[i];
    }
      const mainWord = localStrArr.slice(consCluster.length).join('') + consCluster;
      localStr = mainWord;
    } 
  }

  

  return localStr + "ay";

}


// console.log(translatePigLatin("consonant"));
// console.log(translatePigLatin("eight"));
// console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"));

