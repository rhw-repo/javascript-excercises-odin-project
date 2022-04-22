const palindromes = function (blah) {

    console.log(blah);
    let punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;

    // solves problem of palindrome featuring upper case letters, spaces or punctuation causing 'false' on return due to lack of equality
    const stringToReverse = blah.toLowerCase().replace(punctRE, '').replace(/\s/g, '');
    console.log(stringToReverse);
    const strArray = stringToReverse.split("");

    const reversedArray = strArray.reverse();

    const result = reversedArray.join("");

    let finalResult = result.replace(punctRE, '').replace(/\s/g, '');

    console.log(finalResult);
    return (stringToReverse === finalResult);

};

// Do not edit below this line
module.exports = palindromes;
