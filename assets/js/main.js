document.getElementById("search").addEventListener("submit", async (e) => {
  e.preventDefault();

  const cityName = document.querySelector("#cityName").value;

  const apiKey = "8a60b2de14f7a17c7a11706b2cfcd87c";
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityName)}&appid=${apiKey}&units=metric&lang=pt_br`;

  const results = await fetch(apiURL);
  const json = await results.json();

  if (json.cod === 200) {
    showInfos({
      city: json.name,
      country: json.sys.country,
      temp: json.main.temp,
      tempMax: json.main.temp_max,
      tempMin: json.main.temp_min,
      humidity: json.main.humidity,
      windSpeed: json.wind.speed,
      description: json.weather[0].description,
      icon: json.weather[0].icon,
    });
  } else {
    showError("Não foi possível localizar a cidade");
  }
});

function showInfos(json) {
  document.querySelector("#weather").classList.add("show");

  document.querySelector("#title").innerHTML = `${json.city}, ${json.country}`;

  document.querySelector("#temp-value").innerHTML =
    `${json.temp.toFixed(1).toString().replace(".", ",")}<sup>C°</sup>`;

  document
    .querySelector("#temp-img")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${json.icon}@2x.png`,
    );

  document.querySelector("#temp-description").innerHTML = `${json.description}`;
}

function showError(msg) {
  document.querySelector("#error").innerHTML = msg;
}
