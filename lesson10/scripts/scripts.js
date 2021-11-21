function toggleMenu(){
    document.getElementById("mainNav").classList.toggle('hide');
}

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var date = new Date();
var n = date.toLocaleDateString('en-UK', options);
document.getElementById("todayDate").innerHTML = n;


function saturdayBanner(){
    const date = new Date();
    var saturdayBanner = document.getElementById("sBanner");

    if (date.getDay() !== 5){
        /*saturdayBanner.setAttribute("style", "display:none;");*/
        saturdayBanner.style.display="none";
    }

}

saturdayBanner();


const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=faf2a69873db9518af281faeffb50521`;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let currentDescrip = document.querySelector('#currentDescrip');
    let currentTemp = document.querySelector("#currentTemp");
    let highTemp = document.querySelector("#high");
    let windchill = document.querySelector("#windchill");
    let windSpeed = document.querySelector("#windspeed");

    currentDescrip.textContent = jsObject.weather[0].description;
    console.log(jsObject.weather);
    currentTemp.textContent = jsObject.main.temp.toFixed(0);
    highTemp.textContent = jsObject.main.temp_max.toFixed(0);
    windchill.textContent = jsObject.main.feels_like.toFixed(0);
    windSpeed.textContent = jsObject.wind.speed.toFixed(0);
  });

