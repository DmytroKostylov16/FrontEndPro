function removeElement(array, item) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== item) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

let userInput = prompt("Введіть елементи масиву через кому:");
let array = userInput.split(",");


for (let i = 0; i < array.length; i++) {
    array[i] = array[i].trim();
}

let itemToRemove = prompt("Введіть елемент, який потрібно видалити:").trim();

let newArray = removeElement(array, itemToRemove);
console.log("Оновлений масив:", newArray);