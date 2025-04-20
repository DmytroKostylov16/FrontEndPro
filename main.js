"use strict";
const previousButton = document.querySelector("#previousButton");
const nextButton = document.querySelector("#nextButton");
const slideNumber = document.querySelector("#slideNumber");
const dotContainer = document.querySelector("#dotContainer");

let currentSlide = 0;
const totalSlide = 3;

slideNumber.src = `./image/${currentSlide}.jpg`;
previousButton.style.display = "none";

nextButton.addEventListener("click", () => {
    if (currentSlide < totalSlide) {
        currentSlide += 1;
        slideNumber.src = `./image/${currentSlide}.jpg`;
        updateButtons();
        generateDots();
    }
});

previousButton.addEventListener("click", () => {
    if (currentSlide > 0) {
        currentSlide -= 1;
        slideNumber.src = `./image/${currentSlide}.jpg`;
        updateButtons();
        generateDots();
    }
});

function generateDots() {
    dotContainer.innerHTML = "";
    for (let i = 0; i <= totalSlide; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === currentSlide) {
            dot.classList.add("active");
        }
        dot.addEventListener("click", () => {
            currentSlide = i;
            slideNumber.src = `./image/${currentSlide}.jpg`;
            updateButtons();
            generateDots();
        });
        dotContainer.appendChild(dot);
    }
}

function updateButtons() {
    previousButton.style.display = currentSlide === 0 ? "none" : "block";
    nextButton.style.display = currentSlide === totalSlide ? "none" : "block";
}

generateDots();
