// parameter num represents input 
const fibonacci = function (num) {
// prevent for loop executing if input is negative number
    if (num <0) return "OOPS";
    // for loop starts at 1 but if input 0 then return this
    if (num === 0) return 0;
    // declare to store our set intial value as the 2 preceeding numbers 
      let num1 = 0; 
      let num2 = 1;
      
      for (i = 1; i < num; i++) {
          // stores 'running total' of num1 + num2  
       let temp = num2;
       // reassigns to value of num 1 + num2 added together each iteration 
        num2 = num1 + num2; 
        // reassigns ready for next iteration while i < num
        num1 = temp; 
      }
      // output once i < num no longer true, loop stops 
      return num2;
    }
    
  





// Do not edit below this line
module.exports = fibonacci;

// each number is the sum of the two preceeding numbers 

