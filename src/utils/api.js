const API_KEY = process.env.REACT_APP_OPEN_WEATHER_KEY_API;
const API_URL = process.env.REACT_APP_OPEN_WEATHER_URL;

let fetchWeather = function(city) {
  let weatherUrl =
    `${API_URL}data/2.5/weather?q=${city}&appid=${API_KEY}`;

  return fetch(weatherUrl).then((response) => response.json());
}

export { fetchWeather };