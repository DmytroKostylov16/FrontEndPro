const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function numFunc() {
    let newNumbers = [];
    numbers.forEach(number => {
        if (number % 2 === 0) {
            newNumbers.push(number);
        }
    })
    console.log(newNumbers);
    return newNumbers;
}
numFunc();