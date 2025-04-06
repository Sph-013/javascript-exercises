const sumAll = function(number1, number2) {
    if (!Number.isInteger(number1) || !Number.isInteger(number2)) {
        return "ERROR!";
    }
    if(number1 < 0 || number2 < 0) {
        return "ERROR!";
    }
    if (number1 > number2) {
        const save = number1;
        number1 = number2;
        number2 = temp;
    }

    let finalSum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
