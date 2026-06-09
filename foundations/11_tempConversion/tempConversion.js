const convertToCelsius = function(temp) {
  celcius = (temp - 32) * 5/9;
  rounded = Math.ceil(celcius * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(temp) {
  fahr = (temp * 9/5 + 32);
  rounded = Math.ceil(fahr * 10) / 10;
  return rounded
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
