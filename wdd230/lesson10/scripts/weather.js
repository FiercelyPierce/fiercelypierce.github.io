const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/3.0/weather?lat=49.7557&lon=6.6394&appid=d413370813e147d56d9cced57baf9b6f&units=imperial';

async function apiFetch(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }
    else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}

apiFetch(url);