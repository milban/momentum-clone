import { currentWeatherDataApiKey } from "./apiKey.js";
const LOCATION_LS = "location";

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${currentWeatherDataApiKey}`
  );
}

function saveLocation(locationObj) {
  localStorage.setItem(LOCATION_LS, JSON.stringify(locationObj));
}

const handleGeoSucces = position => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const locationObj = {
    latitude,
    longitude
  };
  saveLocation(locationObj);
};

const handleGeoError = () => {
  console.log("Cant access geo location");
};

function askForCoords() {
  const localLocation = localStorage.getItem(LOCATION_LS);
  if (localLocation === null) {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
  } else {
    getWeather(latitude, longitude);
  }
}

function init() {
  askForCoords();
}

init();
