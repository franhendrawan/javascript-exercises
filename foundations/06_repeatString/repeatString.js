const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    }
    else {
        let text = '';
        while (num > 0) {
            text += string;
            num--;
        }
        return text;
    }
};

// Do not edit below this line
module.exports = repeatString;
