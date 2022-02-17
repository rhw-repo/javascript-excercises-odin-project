const leapYears = (number) => {
    // check if number divides by 4 AND is not divisble by 100
    if (number % 4 === 0 && number % 100 !== 0) {
      return true;
    } else if (number % 4 === 0 && number % 100 === 0 && number % 400 === 0) {
      return true;
    } else {
    return false; 
    }
  }
  

// Do not edit below this line
module.exports = leapYears;