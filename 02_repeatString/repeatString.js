const repeatString = function(text, num) {
    if (num < 0) {
        return "ERROR";
    }
    let repeated_string = "";
    for (let i = 0; i < num; i++) {
        repeated_string += text;
    }

    return repeated_string; 
};




// Do not edit below this line
module.exports = repeatString;
