// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

//THIS CHALLENGE WAS WORDED WEIRD. BASICALLY YOU HAD TO FIX THIS FUNCTION TO ACCEPT AN ARRAY AND THEN TURN THAT ARRAY TO A STING AND CONCATENATE THAT TO THE END OF 'I LIKE'.

// function buildString(...template){
//   return `I like #{template.join(',')}!`;
// }


function buildString(...template){
  return `I like ${template.join(', ')}!`;
}

//--------------OR-------------------

const buildString = (...template) =>`I like ${template.join(', ')}!`;