const sumAll = function(first, last) {
    let result = [];
    if (first < 0 || last < 0) {
        return 'ERROR';
    }
    if (!Number.isInteger(first) || !Number.isInteger(last)){
        return 'ERROR';
    }
    if (first > last) {
        let temp = last;
        last = first;
        first = temp;
    }

    for (let i = first; i <= last; i++){
        result.push(i)
    }

    const sumOfAll = result.reduce((total, currentItem) => {
        return total + currentItem;
    })
    return sumOfAll;
};

// Do not edit below this line
module.exports = sumAll;
