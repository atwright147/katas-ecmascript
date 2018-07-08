const isMultipleOf = (multiples, num) => {
    return multiples.some(multiple => num % multiple === 0);
}

const getMultiples = (quantity, multiples) => {
    const result = [];

    for (let i=1; i<=quantity; i++) {
        if (isMultipleOf(multiples, i)) {
            result.push(i);
        }
    }

    return result;
}

export { getMultiples as default, isMultipleOf };
