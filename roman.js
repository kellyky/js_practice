const toRoman = (num) => {
  console.log("\n" + "Number entered: " + num); 
  let romanNumeral = "";
  let M = "", D = "", C = "", L = "", X = "", V = "", I = "";

  // Thousands builder: M
  M = (num - (num % 1000)) / 1000; 
  M = 'M'.repeat(M); 
  let remainder = num % 1000; 
  console.log("After M (1000s): " + remainder); // temp

  // 900, 1900, 2900
  if (remainder >= 900 && remainder < 1000) {
    remainder /= 1000;
    remainder = Math.floor(remainder);
    console.log("After CM (900): " +  remainder); // temp
    M += "CM";
  } 
  
  // 500s builder: D
  if (remainder >= 500 && remainder < 1000) {
    D = "D"; 
  } 
  remainder %= 500;
  console.log("After D (500): " + remainder);

  // 100s builder: C
  C = (remainder - (remainder % 100)) / 100;
  C = 'C'.repeat(C);
  remainder %= 100;
  console.log("After C (100s): " + remainder);
  
  
  // 50s builder: L
  if (remainder >= 50 && remainder < 100) {
    L = "L";
  }
  remainder %= 50;
  console.log("After L (50): " + remainder); // temp

  // 10s builder: X 
  X = (remainder - (remainder % 10)) / 10;
  X = 'X'.repeat(X);
  remainder %= 10;
  console.log("After X (10s): " + remainder); // temp


  // 5s builder: V
  if (remainder >= 5 && remainder < 10) {
    V = "V";
  }
  remainder %= 5;
  console.log("After V (5): " + remainder); // temp


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

console.log(toRoman(905));
console.log(toRoman(1900));
console.log(toRoman(2450));
