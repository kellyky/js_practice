function fearNotLetter(str) {
  
  let nextAsciiShouldBe = str.charCodeAt(1); 
 
  for (let letterPosition in str){
    const thisAscii = str.charCodeAt(letterPosition);
    if (nextAsciiShouldBe !== thisAscii + 1){
        return String.fromCharCode(nextAsciiShouldBe - 1)
    }     
    nextAsciiShouldBe++;
  }
}  


console.log(fearNotLetter("abce"));
