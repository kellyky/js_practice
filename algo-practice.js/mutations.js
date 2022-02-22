function mutations(arr) {
  const [firstEl, secondEl] = arr.map(el => el.toLowerCase());

  for (let letter of secondEl){
    if (!firstEl.includes(letter)){
      return false;
    }
  }
  return true;
}

console.log(mutations(["hello", "Hello"])); // true
console.log(mutations(["hello", "hey"])); // false
console.log(mutations(["Mary", "Army"])); // true
console.log(mutations(["Mary", "Aarmy"])); // true
