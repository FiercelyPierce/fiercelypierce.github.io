const currentTemp = document.getElementById('#currentTemp');
const currentWindspeed = document.getElementById('#currentWindspeed');
const windChill = document.getElementById('#windChill');
const submitButton = document.getElementById('#submitTemp');

// If the submit button is clicked, calculate the wind chill
submitButton.addEventListener('click', () => {
  const temperature = currentTemp.value;
  const windSpeed = currentWindspeed.value;
  const windChillValue = calculateWindChill(temperature, windSpeed);
  windChill.innerHTML = windChillValue;
});

// Calculate wind chill
function calculateWindChill(temperature, windSpeed) {
  if (temperature <= 50 && windSpeed > 3) {
    const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    return windChill.toFixed(2);
  } else {
    return "N/A";
  }
}
