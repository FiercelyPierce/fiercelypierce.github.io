const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const urlWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=33.2487&lon=-111.6343&appid=d413370813e147d56d9cced57baf9b6f&units=imperial';

async function getWeather(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayWeather(data);
    }
    else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}

function displayWeather(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg; F`
  weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  weatherIcon.alt = data.weather[0].description;
  captionDesc.textContent = data.weather[0].description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

getWeather(urlWeather);
