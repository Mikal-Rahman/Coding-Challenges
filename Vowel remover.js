// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

function shortcut(string) {
  return string.replace(/[aeiou]/g, "");
}

//--------------------OR---------------------

const shortcut = (string) => string.replace(/[aeiou]/gi, "");

//--------------------OR---------------------

function shortcut(string) {
  let arrStr = string.split("");
  let newArr = [];
  for (let i = 0; i < arrStr.length; i++) {
    if (!["a", "e", "i", "o", "u"].includes(arrStr[i].toLowerCase())) {
      newArr.push(arrStr[i]);
    }
  }
  let finalStr = newArr.join("");
  return finalStr;
}

//--------------------OR---------------------

function shortcut(string) {
  let arrStr = string.split("");
  let newArr = [];
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < arrStr.length; i++) {
    if (!vowels.includes(arrStr[i])) {
      newArr.push(arrStr[i]);
    }
  }

  let finalStr = newArr.join("");
  return finalStr;
}

// I understand what this line of code is doing but it isn't fully sinking in can you expound upon it further or give analogies to help me understand what is actually happening here?

// ChatGPT
// Certainly! Let's break down the line of code you're referring to:

// if (!vowels.includes(arrStr[i])) {
// This line is using the includes method to check if the current character arrStr[i] is not present in the vowels array. The includes method is a built-in JavaScript array method that returns true if the array contains the specified element, and false otherwise.

// The ! operator in front of vowels.includes(arrStr[i]) is a logical NOT operator, which negates the result of the includes method. So, !vowels.includes(arrStr[i]) will evaluate to true if arrStr[i] is not a vowel, and false if it is a vowel.

// To understand this concept further, let's consider an analogy:

// Imagine you have a basket of fruits, and you want to check if a particular fruit is not present in the basket. You can use the includes method to check if the fruit is in the basket. If it is not in the basket, the method will return false. However, in this case, you are interested in knowing if the fruit is not in the basket, so you use the logical NOT operator (!) to negate the result. If the result is true, it means the fruit is not in the basket.

// Similarly, in the code, the includes method is used to check if arrStr[i] (the current character) is not present in the vowels array. If it is not present, the condition evaluates to true, indicating that arrStr[i] is not a vowel. This allows us to filter out the vowels from the string and only add non-vowel characters to the newArr array.

// I hope this analogy helps in understanding the logic behind the code!
