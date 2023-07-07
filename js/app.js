let convertButton = document.querySelector(".convertButton");
let resetButton = document.querySelector(".resetButton");
let changeButton = document.querySelector(".changeButton");
let result = document.querySelector(".result");
let converterInput = document.querySelector("#converter");
let isTempC = true;
let base = document.querySelector(".C");
let converted = document.querySelector(".F");

convertButton.addEventListener("click", converting);
resetButton.addEventListener("click", reset);
changeButton.addEventListener("click", change);

function converting() {
  if (isTempC) {
    convertCtoF();
  } else {
    convertFtoC();
  }
}
function convertCtoF() {
  let convert = +converterInput.value * 1.8 + 32;
  result.innerHTML = +converterInput.value + "°C" + " is: " + convert + "°F";
  converterInput.value = "";
}
function convertFtoC() {
  let convert = (+converterInput.value - 32) / 1.8;
  result.innerHTML = +converterInput.value + "°F" + " is: " + convert + "°C";
  converterInput.value = "";
}

function reset() {
  result.innerHTML = "";
  converterInput.value = "";
}

function change() {
  if (isTempC) {
    isTempC = false;
    document.title = `°F to °C`;
    converterInput.setAttribute("placeholder", "°F");
    base.innerHTML = "°F";
    converted.innerHTML = "°C";
  } else {
    isTempC = true;
    document.title = `°C to °F`;
    converterInput.setAttribute("placeholder", "°C");
    base.innerHTML = "°C";
    converted.innerHTML = "°F";
  }

  reset();
}
