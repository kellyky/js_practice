// From Eloquent Javascript Chapter 4: https://eloquentjavascript.net/04_data.html
// Chapter 4 
  // Chapter Notes: https://free-guanaco-140.notion.site/Chapter-4-Data-Structures-Objects-and-Arrays-2825c6d759084545805b329a391f221a
  // Exercise Notes: https://free-guanaco-140.notion.site/Chapter-4-Exercises-def48d0cd53448458deb49e8cdf736e2

const reversedArrayInPlace = (array) => {
  for (i = 0 ; i < (array.length / 2) ; i++) {
    tempElement = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = tempElement;
  }
  return array;

}

console.log(reversedArrayInPlace([7, 6, 5, 4, 3, 2, 1]));
