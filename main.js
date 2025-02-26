let yearOfBirth = prompt("Введіть ваш рік народження:");

if (yearOfBirth !== null && yearOfBirth !== "") {
    let age = 2025 - Number(yearOfBirth);
    console.log("Ваш вік: " + age);
} else {
    console.log("Шкода, що ви не вказали рік народження.");
}

let userHome = prompt("В якому місті ви живете?");

if (userHome !== null && userHome !== "") {
    if (userHome === "Київ") {
        console.log("Круто, ти живеш у столиці України.");
    } else if (userHome === "Лондон") {
        console.log("Круто, ти живеш у столиці Великої Британії.");
    } else if (userHome === "Вашингтон") {
        console.log("Круто, ти живеш у столиці Сполучених Штатів Америки.");
    } else {
        console.log(`Ти живеш у місті ${userHome}`);
    }
} else {
    console.log("Шкода, що ви не вказали місто в якому ви живете.");
}

let sport = prompt("Який твій улюблений вид спорту?");

if (sport !== null && sport !== "") {
    if (sport === "Футбол") {
        console.log("Круто, хочет бути як Кріштіану Роналду?");
    } else if (sport === "Баскетбол") {
        console.log("Круто, хочет бути як Майкл Джордан?");
    } else if (sport === "Бокс") {
        console.log("Круто, хочет бути як Мухаммед Алі?");
    } else {
        console.log(`Круто, що тобі подобається ${sport}.`);
    }
} else {
    console.log("Шкода, що ви не вказав свій улюблений вид спорту");
}