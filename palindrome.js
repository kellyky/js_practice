const stringWithOnlyAlphaNumeric = str => str.replace(/[\W_]/gi, '');

const stringLowercased = str => str.toLowerCase();

const stringReversed = str => str.split("").reverse().join("");

function palindrome(str) {
  // Remove non-alphanum
  const cleanedUpStr = stringWithOnlyAlphaNumeric(str);

  // make string lowercase
  const lowercaseStr = stringLowercased(cleanedUpStr);


  // check if palindrome
  const reversedStr = stringReversed(lowercaseStr);


  return lowercaseStr == reversedStr;
}


// test cases:
console.log(palindrome("eye"));
console.log(palindrome("_eye"));
console.log(palindrome("race car"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("five|\_/|four"));
