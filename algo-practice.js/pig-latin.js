// From JavaScript Algorithms and Data Structures >> Intermediate Algorithm Scripting
// Exercise link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin
// 
// Description: Pig Latin is a way of altering English Words. The rules are as follows:
  // - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
  // - If a word begins with a vowel, just add way at the end.


function translatePigLatin(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let localStr = str;
  console.log(localStr);

  const firstLetter = localStr.split('').shift()
  console.log(firstLetter);




}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"));



// Things that need to happen:
// - evaluate for starting vowel or consonant
// - if cons:
//   - remove from beginning of word
//   - add to end of word + "ay"
// - if vowel:
//   - add "way" to end of word (i.e. no removal)
//
//


