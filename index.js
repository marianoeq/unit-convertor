let p = document.getElementById("number-to-convert");

let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");
let input = document.getElementById("value-to-convert");
let form = document.getElementById("form");
function valueToConvert() {
  event.preventDefault();
  let number = input.value;
  if (!isNaN(number)) {
    p.textContent = `Number typed: ${number}`;

    function lengthConversion() {
      let meterToFeet = (number * 3.28).toFixed(3);
      let feetToMeter = (number * 0.3048).toFixed(3);
      lengthEl.textContent = `${number} Meters = ${meterToFeet} Feet | ${number} Feet = ${feetToMeter} Meters`;
    }
    lengthConversion();
    function volumeConversion() {
      let literToGallon = (number * 0.264).toFixed(3);
      let gallonToLiter = (number * 3.785).toFixed(3);
      volumeEl.textContent = `${number} Liters = ${literToGallon} Gallons | ${number} Gallon = ${gallonToLiter} Liters`;
    }
    volumeConversion();
    function massConversion() {
      let kilosToPounds = (number * 2.2).toFixed(3);
      let poundsToKilos = (number / 2.2046).toFixed(3);
      massEl.textContent = `${number} Kilograms = ${kilosToPounds} Pounds | ${number} Pounds = ${poundsToKilos} Kilograms`;
    }
    massConversion();

    function clearForm() {
     form.reset();

    }
    clearForm();
  } else {
    alert("Please, introduce a number");
  }
}
