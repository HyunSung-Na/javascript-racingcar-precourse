import { 
    ERROR_MESSAGE_LENGTH, 
    ERROR_MESSAGE_COMMA,
    ERROR_MESSAGE_BLANK, 
    ERROR_MESSAGE_DUPLICATE} from './error_message.js';

export default function userInputValidator(userInput) {
    let result = '';
    const array = String(userInput).split(',');

    if (blankError(array)) {
        result = ERROR_MESSAGE_BLANK;
    } else if (commaError(userInput, array)) {
        result = ERROR_MESSAGE_COMMA;
    } else if (lengthError(array)) {
        result = ERROR_MESSAGE_LENGTH;
    } else if (dupulicateError(array)) {
        result = ERROR_MESSAGE_DUPLICATE;
    }

    return result;
};

const lengthError = arr => {
    for (const iter of arr) {
        if (iter.length > 5 || iter.length === 0) {
            return true;
        }
    }
    return false;
};

const commaError = (userInput, array) => {
    if (!userInput.includes(',') && array.length > 1) {
        return true;
    }
    return false;
};

const blankError = array => {
    if (array.includes("")) {
        return true;
    }
    return false;
};

const dupulicateError = array => {
    const setArray = [...new Set(array)];
    
    if (setArray.length !== array.length) {
        return true;
    }
    return false;
};