const removeFromArray = function (arr, ...args) {
    let results = [];

    arr.forEach((item) => {
        if (!args.includes(item)) {
            results.push(item);
        }

    });

    return results;
};

// Do not edit below this line
module.exports = removeFromArray;
