const palindromes = function (string) {
    let lowerCased = string.toLowerCase();

    lowerCased = lowerCased.replace(/[^a-zA-Z0-9]/g, "");

    for(let i = 0; i < lowerCased.length; i++){
        if(lowerCased.at(i) !== lowerCased.at((lowerCased.length - 1) - i)){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
