function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = Math.round(response.data.temperature.current);
  let searchCity = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");

  searchCity.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  temperatureElement.innerHTML = temperature;
  humidityElement.innerHTML = response.data.temperature.humidity;
  console.log(response.data);
}

function newCity(city) {
  let apiKey = "7394a3ffab5cc09c86e6t0co260f5ec2";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function searchFormQuery(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  newCity(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchFormQuery);

newCity("Innsbruck");
