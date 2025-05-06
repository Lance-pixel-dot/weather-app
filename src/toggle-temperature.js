function toggleTempFormat(currentTemp) {
    const currentTempFormat = document.querySelector('.convert-temp');
    if(currentTempFormat.textContent == 'Convert to Fahrenheit'){
        currentTempFormat.textContent = 'Convert to Celsius';
    }else if(currentTempFormat.textContent == 'Convert to Celsius'){
        currentTempFormat.textContent = 'Convert to Fahrenheit';
    }
}

export { toggleTempFormat };