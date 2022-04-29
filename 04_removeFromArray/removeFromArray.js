// resting parameter ... 'the dots literally mean "gather the remaining arguments into an array"
// quote from  https://javascript.info/rest-parameters-spread#:~:text=Rest%20parameters%20are%20used%20to,a%20list%20of%20many%20arguments.

const removeFromArray = function(...rest) {
  
  const array = rest[0];
  //filter() method creates a new array filled with elements that pass a test provided by a function
  // test is value filtered out is value not included in original array 
  return array.filter(value => !rest.includes(value));
  }


// Do not edit below this line
module.exports = removeFromArray;


                                   
    