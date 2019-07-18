const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const time = {
    minutes: date.getMinutes(),
    hours: date.getHours(),
    seconds: date.getSeconds()
  };
  return time;
}

function setTime() {
  const time = getTime();
  const convertedTime = convertTimeForm(plusZeroToFrontOfOneDigit, time);
  clockTitle.innerHTML = `${convertedTime.hours}:${convertedTime.minutes}:${
    convertedTime.seconds
  }`;
}

function plusZeroToFrontOfOneDigit(time) {
  return time < 9 ? `0${time}` : time;
}

function convertTimeForm(converFunction, time) {
  const minutes = converFunction(time.minutes);
  const hours = converFunction(time.hours);
  const seconds = converFunction(time.seconds);
  const convertedTime = {
    minutes: minutes,
    hours: hours,
    seconds: seconds
  };
  return convertedTime;
}

function init() {
  setTime();
  setInterval(setTime, 1000);
}

init();
