"use strict"

let timerDisplay = document.querySelector("#timer");
let startButton = document.querySelector("#startButton");

let actualTime = 75;
let initialTime = actualTime;
let timerId;

timerDisplay.innerHTML = rerender(actualTime);

function rerender(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return `${formatTwoDigits(minutes)}:${formatTwoDigits(seconds)}`;
}

function formatTwoDigits(time) {
    return time < 10 ? `0${time}` : time;
}

function starTimer (){
    if (timerId) return;
    timerId = setInterval(() => {
        actualTime--;
        timerDisplay.textContent = rerender(actualTime);
        startButton.disabled = true;

        if (actualTime <= 0) {
            clearInterval(timerId);
            timerId = null;
            timerDisplay.textContent = "Відлік завершено!";
            setTimeout(function() {
                actualTime = initialTime;
                timerDisplay.textContent = rerender(actualTime);
                startButton.disabled = false;
            }, 1500);
        }
    }, 1000);
}

startButton.addEventListener("click", () => starTimer());