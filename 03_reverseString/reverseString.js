const reverseString = function(text) {
    let reversed_string = "";
    for (let i = text.length - 1; i >= 0; i--) {
        reversed_string += text[i];
    }

    return reversed_string;
};

// Do not edit below this line
module.exports = reverseString;
