const reverseString = function(blah) {
    //make a variable called stringToReverse to hold the input
    const stringToReverse = blah;
    // string gets automatically turned into array because that's what .split() does   
    // .split("") turns it into individual letters in the array

    const strArray = stringToReverse.split("");
    // reverses the array
    const reversedArray = strArray.reverse();
   // return reversed array turned into a string using join("") function
    return reversedArray.join("");
    
};

// Do not edit below this line
module.exports = reverseString;
