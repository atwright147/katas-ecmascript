const fizzBuzz = (num) => {
    let output = '';

    if (num % 3 === 0 || num % 5 === 0) {
        if (num % 3 === 0) {
            output += 'fizz';
        }
        if (num % 5 === 0) {
            output += 'buzz';
        }
    } else {
        output = num;
    }

    return output;
}

export default fizzBuzz;
