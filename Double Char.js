// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "


function doubleChar(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += str[i].repeat(2);
  }
  return result;
}

//------------------or------------------

function doubleChar(str) {
  let doubledChar = '';
  for (let i = 0; i < str.length; i++){
    doubledChar += str[i] + str[i];
  }
  return doubledChar;
}