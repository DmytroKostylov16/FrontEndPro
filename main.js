let number = +prompt("Enter a number");
if ( number <= 1) {
    console.log("не є простим");
} else if (number === 2) {
    console.log("є простим");
} else if (number % 2 === 0) {
    console.log("не є простим")
} else {
    let isPrime = true;
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) {
            console.log("не є простим");
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log("є простим");
    }
}
