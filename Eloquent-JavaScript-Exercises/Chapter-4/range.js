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


function range(start, end, step=1){
let array=[];
  if (start == end) {
    array.push(start);
  } else {
    if (start < end) {
      for (i = start; i <= end; i = i+step) {
        array.push(i);
      }
    } else {
      for (i = start; i >= end; i=i-step) {
        array.push(i);
      }
    }
  }
      return array;
}

console.log(range(1, 3));
// [1, 2, 3]
console.log(range(2, -2, 2));
// [2, 0, -2]
console.log(range(10, 30, 5));
// [10, 15, 20, 25, 30]
