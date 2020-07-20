export const convertKelvinToCelsius = (tempInKelvin) => {
  return parseInt(Number(tempInKelvin) - 273.15, 10);
};

export const convertKelvinToFahrenheit = (tempInKelvin) => {
  return parseInt(Number(tempInKelvin) * 1.8 - 459.67, 10);
};
