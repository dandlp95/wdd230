// weather forecast
const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=faf2a69873db9518af281faeffb50521`;
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        let currentDescrip = document.querySelector('#p-currentDescrip');
        let currentTemp = document.querySelector("#p-currentTemp");
        let highTemp = document.querySelector("#p-high");
        let windchill = document.querySelector("#p-windchill");
        let windSpeed = document.querySelector("#p-windspeed");

        currentDescrip.textContent = jsObject.weather[0].description;
        console.log(jsObject.weather);
        currentTemp.textContent = jsObject.main.temp.toFixed(0);
        highTemp.textContent = jsObject.main.temp_max.toFixed(0);
        windchill.textContent = jsObject.main.feels_like.toFixed(0);
        windSpeed.textContent = jsObject.wind.speed.toFixed(0);
    });

const apiURLForecast = `https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=faf2a69873db9518af281faeffb50521`;
fetch(apiURLForecast)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const sixPm = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));
        console.log(sixPm);

        const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let day = 0;

        sixPm.forEach(forecast => {
            let date = new Date(forecast.dt_txt);
            let imgsrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
            let imgalt = forecast.weather[0].description;

            document.querySelector(`#p-day${day + 1}`).textContent = weekDays[date.getDay()];
            document.querySelector(`#p-forecast${day + 1}`).textContent = forecast.main.temp.toFixed(0);
            document.querySelector(`#p-icon${day + 1}`).setAttribute("src", imgsrc);

            console.log(forecast.weather[0].icon);
            day++;
            console.log(date);

        })
    });