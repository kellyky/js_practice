// From [https://exercism.org/tracks/javascript/exercises/roman-numerals/edit](https://exercism.org/tracks/javascript/exercises/roman-numerals/edit)
// Directions: [https://exercism.org/tracks/javascript/exercises/roman-numerals/edit](https://exercism.org/tracks/javascript/exercises/roman-numerals/edit)

/*    NOTES 
 *    
 *    We know num % 1000 =  // tells us if a number is evenly divisible by 1000
 *      D: We know that num % 500 // tells us if a number is evenly divisble by 500
 *          - and that if it comes after M, that the even thousands will be spoken for, which is good. 
 *          - 
 *    We know (num - (num % 1000)/1000 will tell us how many "M"s as thousands to repeat
 *    We'll need to concat an "M" for each thousand
 *    We also know that we'll need to figure out what to do with the Remainder
 *    We know that we can get that remainder with num % 1000
 *    We'll need to declare a variable to keep track of the remainder as we deduct for each Numeral
 *    We'll need a variable (I think) to hold onto the Roman Numeral being built
*/

const toRoman = (num) => {
  let romanNumeral = ""; // the variable we'll use to build the numeral

  // Thousands builder: M
  let M = (num - (num % 1000)) / 1000; // Sets M to the qty of even thousands
  M = 'M'.repeat(M); // concats an "M" to M for each even thousand

  let remainder = num % 1000; // holds the remainder after each "round"; from here it goes to D (500s)

  // 500s builder: D
    // No concatting Ds. 
    // We only want a D if remainder is 500 or more, or if remainder is less than 1000
  let D = "";
  if (remainder >= 500 && remainder < 1000) {
    D = "D"; 
    remainder = num % 500; // After we extract "D"s, we move to 100s (Cs)
  } 





  console.log("\n" + "Number entered: " + num); // statement temporaru
  console.log("Remainder: " + remainder); // statement is temporary

  romanNumeral = M + D; // I *think* this will end up being M + D + ....
  return romanNumeral;
}

console.log(toRoman(1000));
console.log(toRoman(4321));
console.log(toRoman(2999));
console.log(toRoman(2599));
