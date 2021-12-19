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
  let array = [];

  for (let i = 0; i <= list.length; i++) {
    let arrayItem = list.slice(i, i + 1);
    
  
    // let arrayItem = i;
    array.push(arrayItem);
    // list.shift();
    
  };

  console.log(array);
  return array;
}

console.log(listToArray(arrayToList([10, 20, 30])));

// console.log(listToArray([30, {value: 20, rest: {value: 10, rest: {}}}]));
