// Calculate wind chill
function calculateWindChill(temperature, windSpeed) {
  if (temperature <= 50 && windSpeed > 3) {
    const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    return windChill.toFixed(2);
  } else {
    return "N/A";
  }
}

// Example usage
const temperature = 40; // Current temperature in Fahrenheit
const windSpeed = 10; // Current wind speed in miles per hour

const windChill = calculateWindChill(temperature, windSpeed);
console.log(`The wind chill is ${windChill} degrees Fahrenheit.`);
