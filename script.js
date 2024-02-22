let city;
const getWeatherData = (city) => {
    const url = `https://the-weather-api.p.rapidapi.com/api/weather/${city}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ce3ddff04fmsh605a96982ef4b73p1fbc8fjsnb89161d9c37d',
      'X-RapidAPI-Host': 'the-weather-api.p.rapidapi.com'
    }
  };
  return fetch(url,options)
  .then(response => response.json())
  .then(data => data)
  .catch(err => console.error(err));
  
}
const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  const data = await getWeatherData(city);

  showWeatherData(data)

}
showWeatherData = (weatherData) => {
  console.log(weatherData.data)
  document.getElementById('city-name').innerText = weatherData.data.city;
  document.getElementById('weather-type').innerText = weatherData.data.current_weather;
  document.getElementById('temp').innerText = weatherData.data.temp;
  document.getElementById('min-temp').innerText = weatherData.data.wind;
  document.getElementById('max-temp').innerText = weatherData.data.humidity;
}