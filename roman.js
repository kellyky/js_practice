const toRoman = (num) => {
  console.log("\n" + "Number entered: " + num); 
  let romanNumeral = "";
  let M = "", D = "", C = "", L = "", X = "", V = "", I = "";

  // 1000s builder: M
  M = (num - (num % 1000)) / 1000; 
  M = 'M'.repeat(M); 
  let remainder = num % 1000; 
  // console.log("After M (1000s): " + remainder); // temp

  // 900, 1900, 2900
  if (remainder >= 900 && remainder < 1000) {
    remainder /= 1000;
    remainder = Math.floor(remainder);
    M += "CM";
  } 
  // console.log("After CM (900): " +  remainder); // temp
  
  // 500s builder: D
  if (remainder >= 500 && remainder < 1000) {
    D = "D"; 
  } 
  remainder %= 500;
  // console.log("After D (500): " + remainder);

  // 400, 1400, 2400
  if (remainder >= 400 && remainder < 500) {
    remainder /= 500;
    remainder = Math.floor(remainder);
    D += "CD";
  } 
  // console.log("After CD (400): " +  remainder); // temp

  // 100s builder: C
  C = (remainder - (remainder % 100)) / 100;
  C = 'C'.repeat(C);
  remainder %= 100;
  // console.log("After C (100s): " + remainder);
  
  // 90, 190, 290, etc.
  if (remainder >= 90 && remainder < 100) {
    remainder /= 100;
    remainder = Math.floor(remainder);
    C += "XC";
  } 
  // console.log("After XC (90): " +  remainder); // temp
  
  
  // 50s builder: L
  if (remainder >= 50 && remainder < 100) {
    L = "L";
  }
  remainder %= 50;
  // console.log("After L (50): " + remainder); // temp

  // 40, 140, etc. 
  if (remainder >= 40 && remainder < 50) {
    remainder /= 50;
    remainder = Math.floor(remainder);
    L += "XL";
  } 
  // console.log("After DL (40): " +  remainder); // temp

  // 10s builder: X 
  X = (remainder - (remainder % 10)) / 10;
  X = 'X'.repeat(X);
  remainder %= 10;
  // console.log("After X (10s): " + remainder); // temp


  // 9, 19, 29, etc.
  if (remainder == 10) {
    remainder /= 10;
    remainder = Math.floor(remainder);
    X += "IX";
  } 
  // console.log("After IX (9): " +  remainder); // temp

  // 5s builder: V
  if (remainder >= 5 && remainder < 10) {
    V = "V";
  }
  remainder %= 5;
  // console.log("After V (5): " + remainder); // temp


  // 4, 14, etc. 
  if (remainder == 4) {
    remainder /= 5;
    remainder = Math.floor(remainder);
    V += "IV";
  } 
  // console.log("After IV (4): " +  remainder); // temp

  // 1s builder: I

  I = (remainder - (remainder % 1)) / 1;
  I = 'I'.repeat(I);
  remainder %= 1;
  
   
  // temp - delete once things are working 
  // console.log("Remainder: " + remainder); 

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
