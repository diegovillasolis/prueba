const API_KEY = process.env.REACT_APP_OPEN_WEATHER_KEY_API;
const API_URL = process.env.REACT_APP_OPEN_WEATHER_URL;

let fetchWeather = function(city) {
  let weatherUrl =
    `${API_URL}data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;


  return fetch(weatherUrl)
    .then(
      response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
    .catch(
      error => {
        console.log(error);
      });
}

export { fetchWeather };