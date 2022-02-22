function mutation(arr) {
  const [firstEl, secondEl] = arr.map(el => el.toLowerCase());

  const findFalse = secondEl
    .split('')
    .map(letter => !firstEl.includes(letter))
    .every(el => el === false);
  return findFalse;  // returns false if there is no match
}

console.log(mutation(["hello", "Hello"])); // true
console.log(mutation(["hello", "hey"])); // false
console.log(mutation(["Mary", "Army"])); // true
console.log(mutation(["Mary", "Aarmy"])); // true
