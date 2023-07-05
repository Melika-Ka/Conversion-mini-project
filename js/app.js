let convertButton = document.querySelector(".convertButton");
let resetButton = document.querySelector(".resetButton");
let changeButton = document.querySelector(".changeButton");
let result = document.querySelector(".result");
let converterInput = document.querySelector("#converter");
let label = document.querySelector("header label");
let isTempC = true;
convertButton.addEventListener("click", converting);
changeButton.addEventListener("click", changeTemp);
resetButton.addEventListener("click", reset);
converterInput.addEventListener("keyup", validate);

function validate() {
  if (converterInput.value != +converterInput.value) {
    converterInput.value = "";
  }
}

function reset() {
  converterInput.value = "";
  result.innerHTML = "";
}
function changeTemp() {
  isTempC = !isTempC;
  var text = isTempC ? "Converter °C to °F" : "Converter °F to °C";
  label.innerHTML = text;
}
function converting() {
  if (isTempC) {
    convertCtoF();
  } else {
    convertFtoC();
  }
}
function convertCtoF() {
  let convert = Math.round(+converterInput.value * 1.8 + 32);
  result.innerHTML = +converterInput.value + "°C" + " is: " + convert + "°F";
  converterInput.value = "";
}
function convertFtoC() {
  let convert = Math.round((+converterInput.value - 32) / 1.8);
  result.innerHTML = +converterInput.value + "°F" + " is: " + convert + "°C";
  converterInput.value = "";
}
