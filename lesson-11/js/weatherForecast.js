// adding weather info
function addWeatherInfo(tag1, tag2, tag3, tag4, tag5, jsObject) {
    let currentDescrip = document.querySelector(tag1);
    let currentTemp = document.querySelector(tag2);
    let highTemp = document.querySelector(tag3);
    let windchill = document.querySelector(tag4);
    let windSpeed = document.querySelector(tag5);

    currentDescrip.textContent = jsObject.weather[0].description;
    currentTemp.textContent = jsObject.main.temp.toFixed(0);
    highTemp.textContent = jsObject.main.temp_max.toFixed(0);
    windchill.textContent = jsObject.main.feels_like.toFixed(0);
    windSpeed.textContent = jsObject.wind.speed.toFixed(0);
}

// adding forecast info
function addForecastInfo(jsObject, tag1, tag2, tag3) {
    const sixPm = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let day = 0;

    sixPm.forEach(forecast => {
        let date = new Date(forecast.dt_txt);
        let imgsrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
        let imgalt = forecast.weather[0].description;

        console.log(document.querySelector(tag1 + `${day + 1}`));
        document.querySelector(tag1 + `${day + 1}`).textContent = weekDays[date.getDay()];
        document.querySelector(tag2 + `${day + 1}`).textContent = forecast.main.temp.toFixed(0);
        document.querySelector(tag3 + `${day + 1}`).setAttribute("src", imgsrc);
        document.querySelector(tag3 + `${day + 1}`).setAttribute("alt", imgalt);

        day++;
    })
}

/* Preston */
const pApiURL = `https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=faf2a69873db9518af281faeffb50521`;
fetch(pApiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        addWeatherInfo("#p-currentDescrip", "#p-currentTemp", "#p-high", "#p-windchill", "#p-windspeed", jsObject);
    });


const pApiURLForecast = `https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=faf2a69873db9518af281faeffb50521`;
fetch(pApiURLForecast)
    .then((response) => response.json())
    .then((jsObject) => {
        addForecastInfo(jsObject, "#p-day", "#p-forecast", "#p-icon");
    });

/* Soda Springs */
const sApiURL = `https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=faf2a69873db9518af281faeffb50521`;
fetch(sApiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        addWeatherInfo("#s-currentDescrip", "#s-currentTemp", "#s-high", "#s-windchill", "#s-windspeed", jsObject);
    });

const sApiURLForecast = `https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=faf2a69873db9518af281faeffb50521`;
fetch(sApiURLForecast)
    .then((response) => response.json())
    .then((jsObject) => {
        addForecastInfo(jsObject, "#s-day", "#s-forecast", "#s-icon");
    });

/* Fish Haven */
const fApiURL = `https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=faf2a69873db9518af281faeffb50521`;
fetch(fApiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        addWeatherInfo("#f-currentDescrip", "#f-currentTemp", "#f-high", "#f-windchill", "#f-windspeed", jsObject);
    });

const fApiURLForecast = `https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=faf2a69873db9518af281faeffb50521`;
fetch(fApiURLForecast)
    .then((response) => response.json())
    .then((jsObject) => {
        addForecastInfo(jsObject, "#f-day", "#f-forecast", "#f-icon");
    });


    

















/* Obsolete/ignore */

/*
const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=faf2a69873db9518af281faeffb50521`;
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        let currentDescrip = document.querySelector('#p-currentDescrip');
        let currentTemp = document.querySelector("#p-currentTemp");
        let highTemp = document.querySelector("#p-high");
        let windchill = document.querySelector("#p-windchill");
        let windSpeed = document.querySelector("#p-windspeed");

        currentDescrip.textContent = jsObject.weather[0].description;
        currentTemp.textContent = jsObject.main.temp.toFixed(0);
        highTemp.textContent = jsObject.main.temp_max.toFixed(0);
        windchill.textContent = jsObject.main.feels_like.toFixed(0);
        windSpeed.textContent = jsObject.wind.speed.toFixed(0);
    });

const apiURLForecast = `https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=faf2a69873db9518af281faeffb50521`;
fetch(apiURLForecast)
    .then((response) => response.json())
    .then((jsObject) => {

        addForecastInfo(jsObject, "#p-day", "#p-forecast", "#p-icon");

        const sixPm = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));

        const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let day = 0;

        sixPm.forEach(forecast => {
            let date = new Date(forecast.dt_txt);
            let imgsrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
            let imgalt = forecast.weather[0].description;

            document.querySelector(`#p-day${day + 1}`).textContent = weekDays[date.getDay()];
            document.querySelector(`#p-forecast${day + 1}`).textContent = forecast.main.temp.toFixed(0);
            document.querySelector(`#p-icon${day + 1}`).setAttribute("src", imgsrc);
            document.querySelector(`#p-icon${day + 1}`).setAttribute("alt", imgalt);

            day++;
        })
    });




    */




