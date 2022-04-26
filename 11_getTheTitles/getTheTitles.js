

const getTheTitles = function (myArray) {

    let newArrayOfTitles = myArray.map(function (currentObjFromArray, positionInArray, theArray) {
        return currentObjFromArray.title;
    });

    return newArrayOfTitles;
}

/* The Odin Project's solution:

const getTheTitles = function (array) {
return array.map(book => book.title);
};

*/
// Do not edit below this line
module.exports = getTheTitles;
