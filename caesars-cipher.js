const ROTATION = 13;

function rot13(str) {
  let decodedStr = "";

  for (let i = 0; i < str.length; i++){
    const char = str[i];  // original char
    const charCode = str.charCodeAt(i);   // charCode for char

    // if char is a letter, decode char
    if(/[A-M]/.test(char)){
      const decodedChar = charCode + ROTATION;
      decodedStr += String.fromCharCode(decodedChar);

    } else if (/[N-Z]/.test(char)){
      const decodedChar = charCode - ROTATION;
      decodedStr += String.fromCharCode(decodedChar);

    } else {
      decodedStr += char;
    }
    
  }

  return decodedStr;
}


console.log(rot13("ABC!!"));
