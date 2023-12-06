document.addEventListener('DOMContentLoaded', function() {
    const temperatureInput = document.getElementById('temperature');
    const fromUnitSelect = document.getElementById('fromUnit');
    const toUnitSelect = document.getElementById('toUnit');
    const convertButton = document.getElementById('convertBtn');
    const resultText = document.getElementById('result');



    convertButton.addEventListener('click', function() {
        const temperature = parseFloat(temperatureInput.value);
        const fromUnit = fromUnitSelect.value;
        const toUnit = toUnitSelect.value;


        if (!isNaN(temperature)) {
            let convertedTemperature;

            if (fromUnit === 'celsius' && toUnit === 'kelvin') {
                convertedTemperature = temperature + 273.15;
            } else if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
                convertedTemperature = (temperature * 9/5) + 32;
            } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
                convertedTemperature = temperature - 273.15;
            } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
                convertedTemperature = (temperature - 273.15) * 9/5 + 32;
            } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
                convertedTemperature = (temperature - 32) * 5/9;
            } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
                convertedTemperature = (temperature - 32) * 5/9 + 273.15;
            } else {
                convertedTemperature = temperature;
            }

            resultText.textContent = `${temperature.toFixed(2)} ${fromUnit} is ${convertedTemperature.toFixed(2)} ${toUnit}`;
        } else {
            resultText.textContent = "Please enter a valid temperature.";
        }
    });
    
});
