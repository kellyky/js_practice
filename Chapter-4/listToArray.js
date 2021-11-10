// From Eloquent Javascript Chapter 4: https://eloquentjavascript.net/04_data.html
// Chapter 4 
  // Chapter Notes: https://free-guanaco-140.notion.site/Chapter-4-Data-Structures-Objects-and-Arrays-2825c6d759084545805b329a391f221a
  // Exercise Notes: https://free-guanaco-140.notion.site/Chapter-4-Exercises-def48d0cd53448458deb49e8cdf736e2

// Not sure where to start so I will start with:
  // renaming the function and argument and console.log statements to test

// From Eloquent Javascript Chapter 4: https://eloquentjavascript.net/04_data.html
// Chapter 4
  // Chapter Notes: https://free-guanaco-140.notion.site/Chapter-4-Data-Structures-Objects-and-Arrays-2825c6d759084545805b329a391f221a
  // Exercise Notes: https://free-guanaco-140.notion.site/Chapter-4-Exercises-def48d0cd53448458deb49e8cdf736e2


const arrayToList = (array) => {
  let list = {};
  for (let item in array) {
    list = {
      value: array[item],
      rest: list
    }
  };
  return list;
  }


const listToArray = (list) => {
  let array = []
  for (let entry in list) {
    array.push(list[entry]);
  };
  return array;
}


console.log(arrayToList([1, 2, 3]));
console.log(arrayToList([11, "heyo!", 301]));
console.log(arrayToList([1, 2, 3, 5]));

console.log(listToArray(arrayToList([10, 20, 30])));
console.log(listToArray({ value: 3, rest: { value: 2, rest: { value: 1, rest: {} } } }));
