// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name) {
    // split the name into two words
    const words = name.split(" ");
    // get the first letter of each word and capitalize it
    const initials = words.map(word => word.charAt(0).toUpperCase());
    // join the initials with a dot separator
    return initials.join(".");
  }