// V1: works alongside Class Central YT video: "Let’s learn intermediate algorithms in JS! [Free JS Bootcamp]" https://www.youtube.com/watch?v=Jn1jRcB2650 

function diffArray(arr1, arr2) {
  const filteredArr1 = arr1.filter(elem => !arr2.includes(elem));
  const filteredArr2 = arr2.filter(elem => !arr1.includes(elem));
  return filteredArr1.concat(filteredArr2)
}


diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
