const toRoman = (num) => {
  console.log("\n" + "Number entered: " + num); 
  let romanNumeral = "";
  let M = "", D = "", C = "", L = "", X = "", V = "", I = "";

  // 1000s builder: M
  M = (num - (num % 1000)) / 1000; 
  M = 'M'.repeat(M); 
  let remainder = num % 1000; 

  // 900, 1900, 2900
  if (remainder >= 900 && remainder < 1000) {
    remainder /= 1000;
    M += "CM";
  } 
  
  // 500s builder: D
  if (remainder >= 500 && remainder < 1000) {
    D = "D"; 
  } 
  remainder %= 500;

  // 400, 1400, 2400
  if (remainder >= 400 && remainder < 500) {
    remainder /= 500;
    D += "CD";
  } 

  // 100s builder: C
  C = (remainder - (remainder % 100)) / 100;
  C = 'C'.repeat(C);
  remainder %= 100;
  // console.log("After C (100s): " + remainder);
  
  // 90, 190, 290, etc.
  if (remainder >= 90 && remainder < 100) {
    remainder /= 100;
    C += "XC";
  } 
  
  
  // 50s builder: L
  if (remainder >= 50 && remainder < 100) {
    L = "L";
  }
  remainder %= 50;

  // 40, 140, etc. 
  if (remainder >= 40 && remainder < 50) {
    remainder /= 50;
    L += "XL";
  } 

  // 10s builder: X 
  X = (remainder - (remainder % 10)) / 10;
  X = 'X'.repeat(X);
  remainder %= 10;


  // 9, 19, 29, etc.
  if (remainder == 10) {
    remainder /= 10;
    X += "IX";
  } 

  // 5s builder: V
  if (remainder >= 5 && remainder < 10) {
    V = "V";
  }
  remainder %= 5;


  // 4, 14, etc. 
  if (remainder == 4) {
    remainder /= 5;
    V += "IV";
  } 

  // 1s builder: I
  I = (remainder - (remainder % 1)) / 1;
  I = 'I'.repeat(I);
  remainder %= 1;
  

  // keepers
  romanNumeral = M + D + C + L + X + V + I;
  return romanNumeral;
}

console.log(toRoman(4));
console.log(toRoman(14));
console.log(toRoman(44));
console.log(toRoman(104));
console.log(toRoman(144));
console.log(toRoman(404));
console.log(toRoman(444));
console.log(toRoman(1004));
console.log(toRoman(1014));
console.log(toRoman(1214));
console.log(toRoman(1040));
console.log(toRoman(1044));
console.log(toRoman(1444));
