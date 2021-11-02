const toRoman = (num) => {
  let romanNumeral = "";

  // Thousands builder: M
  let M = (num - (num % 1000)) / 1000; 
  M = 'M'.repeat(M); 

  let remainder = num % 1000; 

  // 500s builder: D
  let D = ""; 
  if (remainder >= 500 && remainder < 1000) {
    D = "D"; 
  } 
  
  remainder %= 500;

  // 100s builder: C
  let C = (remainder - (remainder % 100)) / 100;
  C = 'C'.repeat(C);

  remainder %= 100;

  // 50s builder: L
  let L = ""
  if (remainder >= 50 && remainder < 100) {
    L = "L";
  }

  remainder %= 50;

  // 10s builder: X 
  let X = (remainder - (remainder % 10)) / 10;
  X = 'X'.repeat(X);

  remainder %= 10;


  // 5s builder: V
  let V = ""
  if (remainder >= 5 && remainder < 10) {
    V = "V";
  }

  remainder %= 5;

  // 1s builder: I

  let I = (remainder - (remainder % 1)) / 1;
  I = 'I'.repeat(I);

  remainder %= 1;
  
   
  // temp - delete once things are working 
  console.log("\n" + "Number entered: " + num); 
  console.log("Remainder: " + remainder); 

  // keepers
  romanNumeral = M + D + C + L + X + V + I;
  return romanNumeral;
}

console.log(toRoman(900));
