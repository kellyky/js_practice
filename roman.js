const toRoman = (num) => {
  console.log("\n" + "Number entered: " + num); 

  let M = "", D = "", C = "", L = "", X = "", V = "", I = "";
  let romanNumeralArray = [];
  


  let repeatThisManyTimes = (num - (num % 1000)) / 1000; 
  romanNumeralArray.push('M'.repeat(repeatThisManyTimes)); 
  let remainder = num % 1000; 
  
  if (remainder >= 900 && remainder < 1000) {
    romanNumeralArray.push('CM'); 
    remainder -= 900;
  } 

  if (remainder >= 500 && remainder < 1000) {
    romanNumeralArray.push('D');
  } 
  remainder %= 500;

  if (remainder >= 400 && remainder < 500) {
    romanNumeralArray.push('CD');
    remainder -= 400;
  } 

  repeatThisManyTimes = (remainder - (remainder % 100)) / 100;
  romanNumeralArray.push('C'.repeat(repeatThisManyTimes)); 
  remainder %= 100;
  
  if (remainder >= 90 && remainder < 100) {
    romanNumeralArray.push('XC'); 
    remainder -= 90;
  } 
  
  if (remainder >= 50 && remainder < 100) {
    romanNumeralArray.push('L');
  }
  remainder %= 50;

  if (remainder >= 40 && remainder < 50) {
    romanNumeralArray.push('XL');
    remainder -= 40;
  } 

  repeatThisManyTimes = (remainder - (remainder % 10)) / 10;
  romanNumeralArray.push('X'.repeat(repeatThisManyTimes)); 
  remainder %= 10;


  if (remainder == 9) {
    romanNumeralArray.push('IX');
    remainder -= 9;
  } 

  if (remainder >= 5 && remainder < 10) {
    romanNumeralArray.push('V');
  }
  remainder %= 5;

  if (remainder == 4) {
    romanNumeralArray.push('IV');
    remainder -= 4;
  } 

  repeatThisManyTimes = (remainder - (remainder % 1)) / 1;
  romanNumeralArray.push('I'.repeat(repeatThisManyTimes)); 
  
  
  const removeEmpty = romanNumeralArray.filter(el => {
    return el != null;
  });

  let romanNumeral = removeEmpty.join('');
  return romanNumeral;

}

console.log(toRoman(2099));
console.log(toRoman(3459));
console.log(toRoman(994));
