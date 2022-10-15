
getWeatherData = (city) => {
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '89b9986844mshc8b39c9747900c5p196362jsne51fa4ab3c5b',
		'X-RapidAPI-Host': 'bestweather.p.rapidapi.com'
	}
};
const weatherPromise =fetch(`https://bestweather.p.rapidapi.com/weather/${city}/today?unitGroup=us`, options)
  return weatherPromise.then(response => {
    return response.json()})
	.catch(err => console.error(err));
}


const searchCity = () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  getWeatherData(city)
  .then((res) =>{
    showWeatherData(res);
  }).catch(err => {
    console.error(err);
    console.log("something went wrong");
  })
}

const showWeatherData = (weatherData) => {
  //CODE GOES HERE
document.getElementById("weather-type").innerText = weatherData.currentConditions.conditions
document.getElementById("max-temp").innerText = weatherData.days[0].tempmax
document.getElementById("min-temp").innerText = weatherData.days[0].tempmin
document.getElementById("temp").innerText = weatherData.days[0].temp;
}

