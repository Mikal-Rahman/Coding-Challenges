// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
let bmi = weight/height**2;
  
  if (bmi <= 18.5) {
   return ("Underweight"); 
  
  }else if (bmi <= 25.0) {
   return ("Normal"); 
   
  }else if (bmi <= 30.0) {
   return ("Overweight"); 
  
  }else if (bmi > 30.0) {
   return ("Obese"); 
  
  }
  
}

//------------------or-------------------

const bmi = (weight, height) => weight/height**2 <= 18.5 ? "Underweight" : weight/height**2 <= 25 ? "Normal" : weight/height**2 <= 30 ? "Overweight" : "Obese";

//------------------or-------------------

function bmi(weight, height) {
  const bmi = weight/height**2;
  switch (true) {
    case bmi <= 18.5:
      return 'Underweight';
    case bmi <= 25:
      return 'Normal';
    case bmi <= 30:
      return 'Overweight';
    default:
      return 'Obese';
  }
}
