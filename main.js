let str = prompt("Введіть свій текст.");
let symbol  = prompt("Введіть літери, які хочете видалити, без пробілу.");

function removeCharacters(str, symbol) {
    for (let i = 0; i < symbol.length; i++) {
        str = str.replaceAll(symbol[i], "");
    }
    return str;
}

let result = removeCharacters(str, symbol);
console.log(result);

