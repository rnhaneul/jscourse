const city = document.getElementById('city').value;
const apiKey = 'YOUR_API_KEY';
const lat = document.getElementById('lat').value;
const lon = document.getElementById('lon').value;

function showWeatherDetails(event) {
    event.preventDefault();
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${toCelsius(data.main.temp)} &#8451;</p>
            <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
      });
}

if(city === "") {
    document.getElementById('weatherForm').addEventListener('submit', getWeatherLatLon)
} else {    
    document.getElementById('weatherForm').addEventListener('submit', showWeatherDetails)
}

function getWeatherLatLon(event) {
    event.preventDefault();   
    const apiLATLON = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    fetch(apiLATLON)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const lat_lon_result = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${toCelsius(data.main.temp)} &#8451;</p>
            <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    })
}


function toCelsius(kelvin) {
    const celsius = Math.floor(kelvin - 273.15)
    return celsius
}