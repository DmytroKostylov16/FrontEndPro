const helpForm = document.querySelector("#helpForm");
helpForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(helpForm);
    const name = formData.get("name");
    const message = formData.get("message");
    const phone = formData.get("phone");
    const email = formData.get("email");

    let hasError = false;

    function errorMessage (selectorName, errorMessage) {
        document.querySelector(`#error-${selectorName}`).innerHTML = errorMessage;
    }

    if (!name || name.length < 2) {
        errorMessage("name","Name is required.");
        hasError = true;
    } else if (!/^[a-zA-Zа-яА-ЯёЁ]+$/.test(name)) {
        errorMessage("name","Name must contain only letters.");
    } else {
        errorMessage("name","");
    }

    if (!message) {
        errorMessage("message","Message is required.");
        hasError = true;
    } else if (message.length < 5) {
        errorMessage("message","Message length must be at least 5 characters long.");
    } else {
        errorMessage("message","");
    }

    if (!phone) {
        errorMessage("phone","Phone is required");
        hasError = true;
    } else if (!/^\+380\d{9}$/.test(phone)) {
        errorMessage("phone", "Phone must be in the format +380..., 13 characters long.");
    } else {
        errorMessage("phone","");
    }

    if (!email) {
        errorMessage("email","Email is required");
        hasError = true;
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        errorMessage("email","Please enter a valid email address.");
    } else {
        errorMessage("email","");
    }

    if(!hasError) {
        console.log(name, message, phone, email);
    }

});