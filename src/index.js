module.exports = function toReadable(number) {
    const values = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety',
        '100': 'hundred',
        '1000': 'thousand'
    };

    const str = number.toString();
    const array = str.split('');

    const showSingleDigit = (arr) => {
        let value = arr[0];
        return values[value];
    }

    const showTwoDigits = (arr) => {
        let value1 = arr[0];
        let value2 = arr[1];
        if (value1 === '1') {
            if (value2 === '0') {
                return values['10'];
            }
            if (value2 === '1') {
                return values['11'];
            }
            if (value2 === '2') {
                return values['12'];
            }
            if (value2 === '3') {
                return values['13'];
            }
            if (value2 === '4') {
                return values['14'];
            }
            if (value2 === '5') {
                return values['15'];
            }
            if (value2 === '6') {
                return values['16'];
            }
            if (value2 === '7') {
                return values['17'];
            }
            if (value2 === '8') {
                return values['18'];
            }
            if (value2 === '9') {
                return values['19'];
            }
        } else {
            return value2 !== '0' ? values[value1 + '0'] + ' ' + values[value2] : values[value1 + '0'];
        }
    };

    const showThreeDigits = (arr) => {
        let value1 = arr[0];
        let value2 = arr[1];
        let value3 = arr[2];
        if (value2 === '0') {
            if (value3 === '0') {
                return values[value1] + ' hundred';
            } else {
                return values[value1] + ' hundred ' + values[value3];
            }
        } else {
            let decadesArr = [value2, value3];
            const decades = showTwoDigits(decadesArr);
            return values[value1] + ' hundred ' + decades;
        }
    };

    let result = null;
    if (array.length === 1) {
        result = showSingleDigit(array);
    }
    if (array.length === 2) {
        result = showTwoDigits(array);
    }
    if (array.length === 3) {
        result = showThreeDigits(array);
    }
    return result;
}
