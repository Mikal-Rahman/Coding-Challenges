// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let xxx = 0;
    let ooo = 0;
  for (let i = 0; i < str.length; i++){
    let char = str.charAt(i).toLowerCase();
    if (char === 'x'){
      xxx++;
    }else if (char === 'o'){
      ooo++;      
    }
  }
  return (xxx===ooo);
}

//-----------------------------or--------------------------

function XO(str) {
  let strArr = str.split('');
  let xCount = 0;
  let oCount = 0;
  strArr.forEach(function (string){
    string = string.toLowerCase();
    if (string.charAt() === 'x'){
      xCount++;
    }else if (string.charAt() === 'o'){
      oCount++;
    }
  });
  return(xCount === oCount);
}