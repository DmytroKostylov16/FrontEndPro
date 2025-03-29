const imgContainer = document.querySelector("#imgContainer");
const imgButton = document.querySelector("#imgButton");

imgButton.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    imgContainer.src = `./img/${randomNumber}.jpg`;
});