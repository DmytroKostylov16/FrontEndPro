function number() {
    let userNum ;
    let attempts = 10;

    for (let i = 0; i < attempts; i++) {
        userNum = +prompt("Введіть будь ласка число більше 100.");

        if (!isNaN(userNum) && userNum > 100) {
            console.log(userNum, ",більше 100");
            return;
        }
        console.log(`Спроба ${i + 1}: Ви ввели ${userNum}. Спробуйте ще раз.`);
    }
    console.log("Ви використали всі спроби. Останнє введене число:", userNum);
}

number();