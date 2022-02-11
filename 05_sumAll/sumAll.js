const sumAll = (num1, num2) => {

    // needs to work with larger number first 
    if (num1 > num2) {
        let tempVar = num1;
        num1 = num2;
        num2 = tempVar;
    }

    // to reject NaNs 
    if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    // to reject strings containing numbers that JS converts to number 
    if (typeof num1 != 'number' || typeof num2 != 'number') {
        return "ERROR";
    }

    // to add all integers between and including 2 integers 
    let total = 0;
    for (i = num1; i <= num2; i++) {
        total = i + total;
    }

    return total;
}

// call function run test 
module.exports = sumAll;
