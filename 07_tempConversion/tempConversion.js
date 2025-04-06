const convertToCelsius = function(temperature) {
  let celsius = (temperature - 32) * 5/9;
  let decimal = Math.round(celsius * 10) / 10;
  return decimal;
};

const convertToFahrenheit = function(temperature) {
  let fahrenheit = (temperature * 9/5) + 32;
  let decimal = Math.round(fahrenheit * 10) / 10;
  return decimal
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
