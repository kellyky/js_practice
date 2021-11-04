const toRoman = (num) => {
  console.log("\n" + "Number entered: " + num); 

  let romanNumeral = [];

  let repeatThisManyTimes = (num - (num % 1000)) / 1000; 
  romanNumeral.push('M'.repeat(repeatThisManyTimes)); 
  let remainder = num % 1000; 
  
  if (remainder >= 900 && remainder < 1000) {
    romanNumeral.push('CM'); 
    remainder -= 900;
  } 

  if (remainder >= 500 && remainder < 1000) {
    romanNumeral.push('D');
  } 
  remainder %= 500;

  if (remainder >= 400 && remainder < 500) {
    romanNumeral.push('CD');
    remainder -= 400;
  } 

  repeatThisManyTimes = (remainder - (remainder % 100)) / 100;
  romanNumeral.push('C'.repeat(repeatThisManyTimes)); 
  remainder %= 100;
  
  if (remainder >= 90 && remainder < 100) {
    romanNumeral.push('XC'); 
    remainder -= 90;
  } 
  
  if (remainder >= 50 && remainder < 100) {
    romanNumeral.push('L');
  }
  remainder %= 50;

  if (remainder >= 40 && remainder < 50) {
    romanNumeral.push('XL');
    remainder -= 40;
  } 

  repeatThisManyTimes = (remainder - (remainder % 10)) / 10;
  romanNumeral.push('X'.repeat(repeatThisManyTimes)); 
  remainder %= 10;


  if (remainder == 9) {
    romanNumeral.push('IX');
    remainder -= 9;
  } 

  if (remainder >= 5 && remainder < 10) {
    romanNumeral.push('V');
  }
  remainder %= 5;

  if (remainder == 4) {
    romanNumeral.push('IV');
    remainder -= 4;
  } 

  repeatThisManyTimes = (remainder - (remainder % 1)) / 1;
  romanNumeral.push('I'.repeat(repeatThisManyTimes)); 
  
  return romanNumeral.join('');

}

console.log(toRoman(2099));
console.log(toRoman(3459));
console.log(toRoman(994));
