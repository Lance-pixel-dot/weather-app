import { getLocationWeather } from "./get-weather";
import "./styles.css";
import "./reset.css"

const location = document.querySelector('#location');
const form = document.querySelector('#location-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getLocationWeather(location.value);  
})

getLocationWeather();