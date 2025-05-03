"use strict";

function getWeather(data) {
    const existingContainer = document.querySelector(".weatherContainer");
    if (existingContainer) {
        existingContainer.remove();
    }

    const weatherContainer = document.createElement("div");
    weatherContainer.classList.add("weatherContainer");
    document.body.appendChild(weatherContainer);

    const updateWeatherButton = document.createElement("button");
    updateWeatherButton.id = "updateWeatherButton";
    updateWeatherButton.className = "updateWeatherButton";
    updateWeatherButton.innerHTML = `<svg fill="#ffffff" height="200px" width="200px" id="Capa_1" viewBox="-2.52 -2.52 33.01 33.01" xml:space="preserve" stroke="#ffffff">
      <g transform="rotate(0)">
        <path d="M23.92,14.746l-4.05-4.051h2.374l-0.068-0.177c-1.407-3.561-4.882-6.088-8.95-6.088c-5.312,0-9.62,4.307-9.62,9.616 c0,5.316,4.308,9.623,9.62,9.623c3.907,0,7.271-2.128,8.775-5.479l3.854,0.039c-0.013,0.03-3.032,8.918-12.693,8.918 C5.893,27.148,0,21.254,0,13.987C0,6.715,5.893,0.824,13.161,0.824c6.08,0,11.195,4.116,12.709,9.715l0.032,0.156h2.069 L23.92,14.746z"></path>
      </g>
    </svg>`;

    const leftPart = document.createElement("div");
    leftPart.classList.add("leftPart");

    const rightPart = document.createElement("div");
    rightPart.classList.add("rightPart");

    const city = document.createElement("h2");
    city.classList.add("city");
    city.textContent = `${data.name}`;

    const currentDate = new Date();
    const dayOfWeek = currentDate.toLocaleString('en-US', { weekday: 'long' });
    let dayOfMonth = currentDate.getDate();
    const month = currentDate.toLocaleString('en-US', { month: 'long' });
    if (dayOfMonth < 10) {
        dayOfMonth = `0${dayOfMonth}`;
    }

    const dateDisplay = document.createElement("div");
    dateDisplay.classList.add("date");
    dateDisplay.textContent = `${dayOfWeek}, ${dayOfMonth} ${month}`;

    const temp = document.createElement("div");
    temp.classList.add("temp");
    temp.textContent = `${(data.main.temp - 273.15).toFixed(1)}°C`; // з Кельвінів у Цельсії

    const desc = document.createElement("div");
    desc.classList.add("desc");
    desc.textContent = `${data.weather[0].description}`;

    const wind = document.createElement("div");
    wind.classList.add("wind");
    wind.textContent =`wind speed (m/s) - ${(data.wind.speed)}`

    const icon = document.createElement("img");
    const iconCode = data.weather[0].icon;
    icon.src  = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    icon.classList.add("icon");

    weatherContainer.appendChild(leftPart);
    weatherContainer.appendChild(rightPart);
    weatherContainer.appendChild(updateWeatherButton);
    leftPart.appendChild(city);
    leftPart.appendChild(dateDisplay);
    leftPart.appendChild(wind);
    rightPart.appendChild(temp);
    rightPart.appendChild(desc);
    rightPart.appendChild(icon);

    updateWeatherButton.addEventListener('click', () => {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Krakow&appid=8df75fbd06632ddddd2f8909ffea1662")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                weatherContainer.innerHTML = "";
                getWeather(data);
            })
            .catch(() => {
                console.error("Error updating weather data occurred.");
            });
    });
}

fetch("https://api.openweathermap.org/data/2.5/weather?q=Krakow&appid=8df75fbd06632ddddd2f8909ffea1662")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            getWeather(data);
        })
        .catch(() => {
            console.error("Error occurred.");
        });




