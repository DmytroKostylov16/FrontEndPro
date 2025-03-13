function createSum() {
    let total = +prompt("Введіть своє число?");
    if (isNaN(total)) {
        console.log("Введіть будь ласка число!");
        return null;
    }

    return function (num) {
        total += num;
        return total;
    };

}

const sum = createSum();

console.log(sum(8));
console.log(sum(2));
console.log(sum(15));
console.log(sum(9));