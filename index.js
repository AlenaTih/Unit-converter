/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// Declaring constants for conversion factors
const metersToFeet = 3.281
const littersToGallons = 0.264
const kilosToPounds = 2.204

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthOutput = document.getElementById("length-output")
const volumeOutput = document.getElementById("volume-output")
const massOutput = document.getElementById("mass-output")

convertBtn.addEventListener("click", function() {
    lengthOutput.textContent = convert(inputEl.value, metersToFeet, "meters", "feet")
    volumeOutput.textContent = convert(inputEl.value, littersToGallons, "liters", "gallons")
    massOutput.textContent = convert(inputEl.value, kilosToPounds, "kilos", "pounds")
});

function convert(value, factor, unitFrom, unitTo) {
    const convertedTo = (value * factor).toFixed(3)
    const convertedFrom = (value / factor).toFixed(3)
    return `${value} ${unitFrom} = ${convertedTo} ${unitTo} | ${value} ${unitTo} = ${convertedFrom} ${unitFrom}`
}
