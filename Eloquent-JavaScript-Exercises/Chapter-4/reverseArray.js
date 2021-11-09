// From Eloquent Javascript Chapter 4: https://eloquentjavascript.net/04_data.html
// Chapter 4 
  // Chapter Notes: https://free-guanaco-140.notion.site/Chapter-4-Data-Structures-Objects-and-Arrays-2825c6d759084545805b329a391f221a
  // Exercise Notes: https://free-guanaco-140.notion.site/Chapter-4-Exercises-def48d0cd53448458deb49e8cdf736e2


let reverseArray = function(array) {
  let reversedArray = [];
  for (i = 0; i < array.length; i++) {
    reversedArray.unshift(array[i]);
  }
  return reversedArray;
}

let array = [1, 2, 3, 4, 5];
console.log(reverseArray(array));
// [5, 4, 3, 2, 1]

console.log(reverseArray(["1", "b"]))
// ["b", "1"]
