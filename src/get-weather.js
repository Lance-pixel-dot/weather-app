async function getLocationWeather(location) {
    try{
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=QAFPSEGHX7YH8LF2Z9FG4ZLQG&contentType=json`, {
        mode: 'cors'
        });
        const weather = await response.json();
        console.log(weather);
        console.log(weather.address);
        console.log(weather.currentConditions.conditions);
    } catch{
        console.log("Error: couldn't fetch data from the server");
    }
}

export { getLocationWeather };