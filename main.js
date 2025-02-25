let number = +prompt("Введіть тризначне число");

if (number.toString().length === 3 && !isNaN(number)) {
    let d1 = Math.floor(number / 100);
    let d2 = Math.floor((number / 10) % 10);
    let d3 = number % 10;

    if (d1 === d2 && d2 === d3) {
        console.log("Всі цифри однакові.");
    } else {
        console.log("Не всі цифри однакові.");
    }

    if (d1 === d2 || d2 === d3 || d1 === d3) {
        console.log("Є однакові цифри.");
    } else {
        console.log("Немає однакових цифр.");
    }
} else {
    console.log("Будь ласка, введіть правильне тризначне число.");
}