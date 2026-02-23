const apiKey = "eb41e7ddd9a30b00244d4ad5892adf00";

async function getWeather() {

    const city = document.getElementById("cityInput").value;

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    const response = await fetch(apiURL);
    const data = await response.json();

    if (response.status == 404) {
        alert("City not found!");
        return;
    }

    document.getElementById("cityName").innerText = data.name;
    document.getElementById("temperature").innerText = Math.round(data.main.temp) + "°C";
    document.getElementById("humidity").innerText = data.main.humidity + "%";
    document.getElementById("wind").innerText = data.wind.speed + " km/h";

    const weatherMain = data.weather[0].main;

document.body.className = "";

const condition = weatherMain.toLowerCase();

if (condition.includes("clear")) {
    document.body.classList.add("clear");
}
else if (condition.includes("cloud")) {
    document.body.classList.add("clouds");
}
else if (condition.includes("rain")) {
    document.body.classList.add("rain");
}
else if (condition.includes("drizzle")) {
    document.body.classList.add("drizzle");
}
else if (condition.includes("mist") || condition.includes("fog")) {
    document.body.classList.add("mist");
}
else if (condition.includes("snow")) {
    document.body.classList.add("snow");
}
else if (condition.includes("thunder")) {
    document.body.classList.add("thunderstorm");
}
    const icon = document.getElementById("weatherIcon");

    if (weatherMain === "Clouds") {
        icon.src = "https://cdn-icons-png.flaticon.com/512/414/414825.png";
    }
    else if (weatherMain === "Clear") {
        icon.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png";
    }
    else if (weatherMain === "Rain") {
        icon.src = "https://cdn-icons-png.flaticon.com/512/1163/1163624.png";
    }
    else if (weatherMain === "Drizzle") {
        icon.src = "https://cdn-icons-png.flaticon.com/512/3076/3076129.png";
    }
    else if (weatherMain === "Mist") {
        icon.src = "https://cdn-icons-png.flaticon.com/512/4005/4005901.png";
    }
}