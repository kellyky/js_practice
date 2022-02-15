function bouncer(arr){
  let newArr = [];
  for (let item of arr){
    if (!!item){
      newArr.push(item);
    }
  }
  return newArr;
}

