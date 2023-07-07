let convertButton = document.querySelector(".convertButton");
let resetButton = document.querySelector(".resetButton");
let changeButton = document.querySelector(".changeButton");
let result = document.querySelector(".result");
let converterInput = document.querySelector("#converter");
let label= document.querySelector('label');
let isTempC = true;
convertButton.addEventListener("click", converting);
changeButton.addEventListener('click',function(){
  if(isTempC){
    label.innerText='Converter °F to °C';
    converterInput.setAttribute('placeholder','°F');
    isTempC= false;
  }
  else{
    label.innerText='Converter °C to °F';
    converterInput.setAttribute('placeholder','°C');
    isTempC= true;
  }
});
resetButton.addEventListener('click',function(){
  converterInput.value = "";
  result.innerHTML="";
});



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
