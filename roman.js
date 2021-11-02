/*    NOTES AS I GO
 *    M: 
 *      - When M is before the thousand (like 900) -- NOT yet accounted for
 *    D: 
 *      - even 500s accounted for
 *      - I'm not sure if I have more work on Ds...
 *    C:
 *      - Numbers like 90, 190, 290.... NOT YET accounted for
 *
 *    L:
 *      - 
 *
 *    X: 
 *      - 
 *
 *    V:
 *      - 
 *
 *    I:
 *      - 
 *
*/

const toRoman = (num) => {
  let romanNumeral = "";

  // Thousands builder: M
  let M = (num - (num % 1000)) / 1000; 
  M = 'M'.repeat(M); 

  let remainder = num % 1000; 

  // 500s builder: D
    // No concatting Ds. 
    // We only want a D if remainder is 500 or more, or if remainder is less than 1000
  let D = ""; 
  if (remainder >= 500 && remainder < 1000) {
    D = "D"; 
  } 
  remainder = remainder % 500; // After we extract "D"s, we move to 100s (Cs)

  // 100s builder: C
  let C = (remainder - (remainder % 100)) / 100;
  C = 'C'.repeat(C);

  remainder = remainder % 100;

  // 50s builder: L -> like D, do not concat
  let L = ""
  if (remainder >= 50 && remainder < 100) {
    L = "L";
  }

  remainder = remainder % 50;








  console.log("\n" + "Number entered: " + num); // statement temporaru
  console.log("Remainder: " + remainder); // statement is temporary

  romanNumeral = M + D + C + L; // I *think* this will end up being M + D + ....
  return romanNumeral;
}

console.log(toRoman(1050));
console.log(toRoman(4321));
console.log(toRoman(2999));
console.log(toRoman(2599));
