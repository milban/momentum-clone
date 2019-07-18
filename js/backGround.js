const body = document.querySelector("body");

const IMG_NUMBER = 12;

function handleImgLoad() {
  console.log("img loaded");
}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `./images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandomNum() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandomNum();
  paintImage(randomNumber);
}

init();
