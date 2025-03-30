const promptButton = document.querySelector("#promptButton");
const linkButton = document.querySelector("#linkButton");

let linkResult = "";

promptButton.addEventListener("click", () => {
    linkResult = prompt("Enter the link you want to visit. Example: https://google.com");
});

linkButton.addEventListener("click", () => {
    if (linkResult !== "") {
        window.open(`${linkResult}`);
    } else {
        alert("Please enter the link first. Example: https://google.com");
    }
});