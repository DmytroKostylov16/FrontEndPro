function average(arr) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);

        if (!isNaN(num)) {
            sum += num;
            count++;
        }
    }

    return count === 0 ? 0 : sum / count;
}


let userInput = prompt("Введіть елементи масиву через кому:");
let arr = userInput.split(",").map(item => item.trim());

console.log("Середнє арифметичне чисел у масиві:", average(arr));