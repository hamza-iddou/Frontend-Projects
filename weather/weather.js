const apiKey = "a44cfbe0a53f4f9d07d1c047935977f0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weathericons");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {

        var data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "\t°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "\t%";
        document.querySelector(".Wind").innerHTML = data.wind.speed + "\tkm/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/cloudy.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/storm.png"
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/sun.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/fog.png"
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    };

};

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});





