const LOCATION_LS = "location";

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
  }
}

function init() {
  askForCoords();
}

init();
