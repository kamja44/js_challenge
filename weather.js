const API_KEY = "1bc40dd0758576f5f02a43253b7099c1";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:last-child");
      const city = document.querySelector("#weather span:first-child");
      city.innerHTML = data.name;
      weather.innerHTML = `/ ${data.weather[0].main} / ${data.main.temp} temp`;
    });
}

function onGeoError() {
  alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
