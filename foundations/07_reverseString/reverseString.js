const reverseString = function(string) {
    const originalText = Array.from(string)
    const reversedText = originalText.toReversed();
    const result = reversedText.join('');
    return result.toString()
    
};

// Do not edit below this line
module.exports = reverseString;
