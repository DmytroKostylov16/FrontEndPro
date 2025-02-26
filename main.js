let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch(true) {
    case numOrStr === null:
        console.log("Ви скасували");
        break;
    case numOrStr.trim() === '':
        console.log("Empty sting");
        break;
    case isNaN(+numOrStr):
        console.log(`${numOrStr} is NaN`);
        break;
    default:
        console.log("OK!")
}


