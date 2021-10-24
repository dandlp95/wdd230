
let windchill = document.getElementById('windchill');
let temperature = parseInt(document.getElementById('temperature').textContent);
let windSpeed = parseInt(document.getElementById('windSpeed').textContent);
let calculations = 35.74 + (0.6215*temperature) - (35.75 * (windSpeed**0.16)) + (0.472*temperature*(windSpeed**0.16));
windchill.innerHTML = Math.round(calculations*10)/10