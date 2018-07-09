const isEven = (num) => num % 2 === 0;

const get = (type, data) => {
    let result;

    switch (type) {
        case 'odd':
            result = data.filter(item => !isEven(item));
            break;

        case 'even':
            result = data.filter(item => isEven(item));
            break;
            
        default:
            result = null;
            break;
    }

    return result;
}

export { get as default, isEven };
