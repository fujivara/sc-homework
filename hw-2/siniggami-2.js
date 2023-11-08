const findArraySum = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
const findEvenIndex = (arr) => {
    return arr.findIndex((el, i, array) => {
        if (i === 0) {
            if (0 === findArraySum(array.slice(i + 1))) {
                return true;
            }
        } else if (i === array.length - 1) {
            if (findArraySum(array.slice(0, i)) === 0) {
                return true;
            }
        } else {
            if (findArraySum(array.slice(0, i)) === findArraySum(array.slice(i + 1))) {
                return true;
            }
        }
    });
}
