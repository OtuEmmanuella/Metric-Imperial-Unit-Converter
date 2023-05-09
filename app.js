const inputEl = document.getElementById("input-el")
const conversionBtn = document.getElementById("conversion-btn")
const resetBtn = document.getElementById("reset-btn")
const lengthEl = document.getElementById("length-el")
const volEl = document.getElementById("vol-el")
const massEl = document.getElementById("mass-el")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.2046
const gallonToLiter = 3.785
const feetToMeter = 0.305
const poundToKilo = 0.4535

conversionBtn.addEventListener("click", function () {
  let unitValue = inputEl.value

  lengthEl.textContent = `${unitValue} meters = ${(
    unitValue * meterToFeet
  ).toFixed(3)} feet | ${unitValue} feet = ${(unitValue * feetToMeter).toFixed(
    3
  )} meters`

  volEl.textContent = `${unitValue} liters = ${(
    unitValue * literToGallon
  ).toFixed(3)} gallons | ${unitValue} gallons = ${(
    unitValue * gallonToLiter
  ).toFixed(3)} liters`

  massEl.textContent = `${unitValue} Kilo = ${(unitValue * kiloToPound).toFixed(
    3
  )} pounds | ${unitValue} pounds = ${(unitValue * poundToKilo).toFixed(
    3
  )} kilos`
})

resetBtn.addEventListener("click", function () {
  resetValues()
})

function resetValues() {
  inputEl.value = ""
  lengthEl.textContent = `0 meters = 0 feet | 0 feet = 0 meters`
  volEl.textContent = `0 liters = 0 gallons | 0 gallons = 0 liters`
  massEl.textContent = `0 kilos = 0 pounds | 0 pounds = 0 kilos`
}
