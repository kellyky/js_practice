// From JavaScript Algorithms and Data Structures >> Intermediate Algorithm Scripting
// Exercise link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin


function translatePigLatin(str) {
  let localStr = str; 
  const localStrArr = str.split('');  
  const vowels = ["a", "e", "i", "o", "u"];    

  const hasVowels = localStrArr.filter(char => vowels.includes(char)).length > 0;
  const firstLetterVowel = vowels.includes(localStr[0]);

  if (hasVowels){
    if (firstLetterVowel) localStr += "w";
    else if (!firstLetterVowel) {
      let consCluster = "";
      for (let i = 0; !vowels.includes(localStr[i]); i++){
        consCluster += localStrArr[i];
      }
      localStr = localStrArr.slice(consCluster.length).join('') + consCluster; 
    }
  } 

  return localStr + "ay";
}
  
console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"));

