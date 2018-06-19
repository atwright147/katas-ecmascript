const luhnCheck = (num) => {
    const numString = num.toString();
    const splitNum = numString.split('').map(item => Number(item)).reverse();

    const total = splitNum.reduce((prev, curr, index) => {
        let processed;

        if (index % 2 === 0) {
            processed = curr;
        } else {
            let doubled = curr * 2;
            if (doubled > 9) {
                doubled = doubled - 9;
            }
            processed = doubled;
        }

        return prev + processed;
    }, 0);

    return total % 10 === 0;
};

export default luhnCheck;
