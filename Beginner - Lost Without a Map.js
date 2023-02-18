// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function maps(x){
  let newArr = [];
  for (let i = 0; i < x.length; i++){
    let doubledValue = x[i] * 2;
    newArr.push(doubledValue);
  }
  return newArr;
}

//------------------or---------------
const maps = x => x.map(n => n * 2);
                         
//------------------or---------------

function maps(x){
  let newArr = x.map(n => n*2);
  return newArr;
}