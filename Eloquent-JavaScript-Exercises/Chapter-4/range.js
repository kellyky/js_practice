// From Eloquent Javascript Chapter 4: https://eloquentjavascript.net/04_data.html
// Chapter 4 
  // Chapter Notes: https://free-guanaco-140.notion.site/Chapter-4-Data-Structures-Objects-and-Arrays-2825c6d759084545805b329a391f221a
  // Exercise Notes: https://free-guanaco-140.notion.site/Chapter-4-Exercises-def48d0cd53448458deb49e8cdf736e2


// // Version 1 of exercise
// function range(start, end){
//   let array=[];
//   if (start == end) {
//     array.push(start);
//   } else {
//     if (start < end) {
//       for (i = start; i <= end; i++) {
//         array.push(i);
//       }
//     } else {
//       for (i = start; i >= end; i--) {
//         array.push(i);
//       }
//     }
//   }
//   return array;
// }


// Version 2
// function range(start, end, step=1){
// let array=[];
//   if (start == end) {
//     array.push(start);
//   } else {
//     if (start < end) {
//       for (i = start; i <= end; i = i+step) {
//         array.push(i);
//       }
//     } else {
//       for (i = start; i >= end; i=i-step) {
//         array.push(i);
//       }
//     }
//   }
//       return array;
// }

function range(start, end=start, step=1){
let array=[];
  if (start < end) {
    for (i = start; i <= end; i++){
      array.push(i);
    }
  } else {
    for (i = start; i >= end; i=i-step) {
      array.push(i);
    }
  }
  return array;
}



function sum(array) {
  let number = 0;
  for (i = 0; i < array.length; i++) {
    number += array[i];
  }
  return number;
}

console.log(sum(range(1, 10)));
// → 55

console.log(sum(range(10, 10)));
// → 10
