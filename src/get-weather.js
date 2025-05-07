import { toggleTempFormat, toggleTempButton } from "./toggle-temp";
import { changeBackgroundColor } from "./change-background";

const contentDiv = document.querySelector('#content');

async function getLocationWeather(location) {
    contentDiv.textContent = 'Loading...';
    try{
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=QAFPSEGHX7YH8LF2Z9FG4ZLQG&contentType=json`, {
        mode: 'cors'
        });
        const weather = await response.json();

        console.log(weather);
        contentDiv.textContent = '';

        const weatherStatus = document.createElement('div');
        weatherStatus.textContent = weather.currentConditions.conditions;

        const weatherTemp = document.createElement('div');
        weatherTemp.textContent = `${weather.currentConditions.temp}° Celsius`;

        const convertTempButton = document.createElement('button');
        convertTempButton.className = 'convert-temp';
        
        const getLocalTempFormat = JSON.parse(localStorage.getItem('tempFormat'));

        toggleTempFormat(weather.currentConditions.temp, weatherTemp, convertTempButton, getLocalTempFormat);

        convertTempButton.addEventListener('click', () => {
            toggleTempButton(weather.currentConditions.temp, weatherTemp, convertTempButton);
        })

        contentDiv.appendChild(weatherStatus);
        contentDiv.appendChild(weatherTemp);
        contentDiv.appendChild(convertTempButton);

        const weatherImg = document.createElement('img');
        import(`./svg/${weather.currentConditions.icon}.svg`)
            .then((icon) => {
                weatherImg.src = icon.default;
            })
        weatherStatus.appendChild(weatherImg);

        changeBackgroundColor(weather.currentConditions.cloudcover);
        

    } catch{
        contentDiv.textContent = "Error: couldn't fetch data from the server";
    }
}

export { getLocationWeather };