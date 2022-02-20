const RE = /^\d{3}-\d{3}-\d{4}$/;
const RE2 = /^\(\d{3}\)\s?\d{3}-\d{4}$/;
const RE3 = /^\d{3}\s?\d{3}\s?\d{4}$/;
const RE4 = /^1\s\d{3}\s\d{3}\s\d{4}$/;
const RE5 = /^1\s\d{3}-\d{3}-\d{4}$/;
const RE6 = /^1\s?\(\d{3}\)\s?\d{3}-\d{4}$/;


// Create array of regexes
const REGEXES = [RE, RE2, RE3, RE4, RE5, RE6];

function telephoneCheck(str) {
  // loop through regexes
  for (let regex of REGEXES){
  
    // if one matches, return true
    if (regex.test(str)){
      return true;
    }
  } 
  return false;
}


console.log(telephoneCheck("1 456 789 4444")); //true
console.log(telephoneCheck("1 (555) 555-5555")); //true
console.log(telephoneCheck("555 555 5555")); //true
console.log(telephoneCheck("(555)5(55?)-5555")); //false
console.log(telephoneCheck("1 555 555 5555")); //true
console.log(telephoneCheck("1(555)555-5555")); //true
console.log(telephoneCheck("555-555-5555")); // true
