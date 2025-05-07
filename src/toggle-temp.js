function toggleTempFormat(currentWeatherTemp, weatherTemp, convertTempButton, getLocalTempFormat){

    if(getLocalTempFormat == null){
        const currentTempFormat = 'Celsius';
        convertTempButton.textContent = `Convert to Fahrenheit`;
        localStorage.setItem('tempFormat', JSON.stringify(currentTempFormat))
    }else if(getLocalTempFormat == 'Celsius'){
        weatherTemp.textContent = `${currentWeatherTemp}° Celsius`;
        convertTempButton.textContent = `Convert to Fahrenheit`;
    }else if(getLocalTempFormat == 'Fahrenheit'){
        const toFahrenheit = (currentWeatherTemp * 9/5) + 32;
        weatherTemp.textContent = `${toFahrenheit}° Fahrenheit`;
        convertTempButton.textContent = `Convert to Celsius`;
    }

}

function toggleTempButton(currentWeatherTemp, weatherTemp, convertTempButton){
    const getLocalTempFormat = JSON.parse(localStorage.getItem('tempFormat'));
    
    if(getLocalTempFormat == 'Celsius'){
    
        const toFahrenheit = (currentWeatherTemp) + 32;
        weatherTemp.textContent = `${toFahrenheit}° Fahrenheit`;
        const currentTempFormat = 'Fahrenheit';
        localStorage.setItem('tempFormat', JSON.stringify(currentTempFormat));
        convertTempButton.textContent = `Convert to ${getLocalTempFormat}`;
    
    }else if(getLocalTempFormat == 'Fahrenheit'){
    
        weatherTemp.textContent = `${currentWeatherTemp}° Celsius`;
        const currentTempFormat = 'Celsius';
        localStorage.setItem('tempFormat', JSON.stringify(currentTempFormat));
        convertTempButton.textContent = `Convert to ${getLocalTempFormat}`;
    
    }
}

export { toggleTempFormat, toggleTempButton }