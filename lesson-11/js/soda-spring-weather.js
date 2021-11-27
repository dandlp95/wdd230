const ApiURL = `https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=faf2a69873db9518af281faeffb50521`;
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        let currentDescrip = document.querySelector('#currentDescrip');
        let currentTemp = document.querySelector("#currentTemp");
        let highTemp = document.querySelector("#high");
        let windchill = document.querySelector("#windchill");
        let windSpeed = document.querySelector("#windspeed");

        currentDescrip.textContent = jsObject.weather[0].description;

        currentTemp.textContent = jsObject.main.temp.toFixed(0);
        highTemp.textContent = jsObject.main.temp_max.toFixed(0);
        windchill.textContent = jsObject.main.feels_like.toFixed(0);
        windSpeed.textContent = jsObject.wind.speed.toFixed(0);
    });

const ApiURLForecast = `https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=faf2a69873db9518af281faeffb50521`;
fetch(apiURLForecast)
    .then((response) => response.json())
    .then((jsObject) => {

        const sixPm = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));

        const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let day = 0;

        sixPm.forEach(forecast => {
            let date = new Date(forecast.dt_txt);
            let imgsrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
            let imgalt = forecast.weather[0].description;

            document.querySelector(`#day${day + 1}`).textContent = weekDays[date.getDay()];
            document.querySelector(`#forecast${day + 1}`).textContent = forecast.main.temp.toFixed(0);
            document.querySelector(`#icon${day + 1}`).setAttribute("src", imgsrc);

            day++;

        })
    });