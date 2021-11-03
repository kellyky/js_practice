const toRoman = (num) => {
  console.log("\n" + "Number entered: " + num); 
  let romanNumeral = "";
  let M = "", D = "", C = "", L = "", X = "", V = "", I = "";
  
  M = (num - (num % 1000)) / 1000; 
  M = 'M'.repeat(M); 
  let remainder = num % 1000; 
  
  if (remainder >= 900 && remainder < 1000) {
    M += "CM";
    remainder -= 900;
  } 

  if (remainder >= 500 && remainder < 1000) {
    D = "D"; 
  } 
  remainder %= 500;

  if (remainder >= 400 && remainder < 500) {
    D += "CD";
    remainder -= 400;
  } 

  C = (remainder - (remainder % 100)) / 100;
  remainder %= 100;
  C = 'C'.repeat(C);
  
  if (remainder >= 90 && remainder < 100) {
    C += "XC";
    remainder -= 90;
  } 
  
  if (remainder >= 50 && remainder < 100) {
    L = "L";
  }
  remainder %= 50;

  if (remainder >= 40 && remainder < 50) {
    L += "XL";
    remainder -= 40;
  } 

  X = (remainder - (remainder % 10)) / 10;
  X = 'X'.repeat(X);
  remainder %= 10;


  if (remainder == 9) {
    remainder -= 9;
    X += "IX";
  } 

  if (remainder >= 5 && remainder < 10) {
    V = "V";
  }
  remainder %= 5;

  if (remainder == 4) {
    remainder -= 4;
    V += "IV";
  } 

  I = (remainder - (remainder % 1)) / 1;
  I = 'I'.repeat(I);
  remainder %= 1;
  
  romanNumeral = M + D + C + L + X + V + I;
  return romanNumeral;
}

console.log(toRoman(2099));
console.log(toRoman(3459));
console.log(toRoman(494));
console.log(toRoman(555));
