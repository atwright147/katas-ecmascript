const addLastTwo = (arr) => {
    const len = arr.length;
    return arr[len - 1] + arr[len - 2];
}

const fibonacci = (n) => {
    const result = [0,1];
    
    for (let i=1; i<n-1; i++) {
        result.push(addLastTwo(result));    
    }

    return result;
}

export { fibonacci as default, addLastTwo };
