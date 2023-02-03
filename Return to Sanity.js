//This function should return an object, but it's not doing what's intended. What's wrong?

function mystery() {
    var results = {sanity: 'Hello'};
    return results;
  }


//-------or another solution--------------

const mystery = () => ({sanity: 'Hello'})